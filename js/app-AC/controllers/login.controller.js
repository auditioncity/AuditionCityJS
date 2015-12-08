let LoginController = function($cookies, UserService, $state) {
  
  let vm = this;
  vm.title = 'AuditionCity';
  // console.log(UserService);
  
  vm.login = function(user) {
    // console.log(user);
    UserService.sendLogin(user).then( (res) => {
      UserService.loginSuccess(res);
      // console.log(res);
    });
  };

  vm.signup = function(newuser) {
    UserService.sendSignup(newuser).then( (res) => {
      UserService.signupSuccess(res);
      console.log(res);
    });
  };

};

LoginController.$inject = ['$cookies', 'UserService', '$state'];

export default LoginController;