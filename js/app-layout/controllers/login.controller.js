let LoginController = function($cookies, UserService, $state) {
  
  let vm = this;
  vm.login = function(user) {
    UserService.sendLogin(user).then( (res) => {
      UserService.loginSuccess(res);
    });
  };

};

LoginController.$inject = ['$cookies', 'UserService', '$state'];

export default LoginController;