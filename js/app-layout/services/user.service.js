let UserService = function($http, $cookies, $state, FILESERVER) {
  
  // console.log(FILESERVER);
  let vm = this;

  vm.checkAuth = function() {
    let token = $cookies.get('authToken');
    FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] = token;
    if (token) {
      return $http.get(FILESERVER.URL + 'check', FILESERVER.CONFIG);
    } else {
      $state.go('root.login');
    }
  };

  vm.sendLogin = function(userObj) {
    return $http.post(FILESERVER.URL + 'login', userObj, FILESERVER.CONFIG);
  };

  vm.loginSuccess = function(res) {
    $cookies.put('authToken', res.data.user.auth_token);
    FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] = res.data.user.auth_token;
    $state.go('root.home');
  };

  vm.logout = function() {
    $cookies.remove('authToken');
    FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.login');
  };

};

UserService.$inject = ['$http', '$cookies', '$state', 'FILESERVER'];

export default UserService;