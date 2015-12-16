let UserService = function($http, $cookies, $state, FILESERVER) {
  
  // console.log(FILESERVER);
  let vm = this;

  vm.checkAuth = function() {
    let token = $cookies.get('authToken');
    FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] = token;
    if (token) {
      return $http.get(FILESERVER.URL, FILESERVER.CONFIG);
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
    $cookies.put('actor_id', res.data.user.actor_id);
    $state.go('root.home');
  };

  vm.logout = function() {
    $cookies.remove('authToken');
    $cookies.remove('actor_id');
    FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] = null;
    $state.go('root.login');
  };

  vm.myProfile = function() {
      return $http({
      method: 'GET',
      url: FILESERVER.URL + 'actors/' + $cookies.get('actor_id'),
      headers: {
          'Access-Token': $cookies.get('authToken')
      },
    })
    //   .then( (result) => {
    // // console.log(result);
    // let actor = result.data.actor;
    // vm.actor = actor;
    // $scope.actor = actor;
  // });
  };

  vm.actors = function() {
    return $http({
      method: 'GET',
      url: FILESERVER.URL + 'actors',
      headers: {
        'Access-Token': $cookies.get('authToken')
      },
    })
  };

  this.sendSignup = function(newuser) {
    return $http.post(FILESERVER.URL + 'signup', newuser, FILESERVER.CONFIG);
  };

  this.signupSuccess = function(res) {
    $cookies.put('authToken', res.data.user.auth_token);
    FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] = res.data.user.auth_token;
    $state.go('root.registeractor');
  };

};

UserService.$inject = ['$http', '$cookies', '$state', 'FILESERVER'];

export default UserService;