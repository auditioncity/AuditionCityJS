let HomeController = function(UserService, $state) {
  
  let vm = this;
  vm.title = 'AuditionCity';
  let promise = UserService.checkAuth();

  if (promise) {
    promise.then( (res) => {
      console.log(res);
      if (res.data.status === 'Authentication failed.') {
        $state.go('root.login');
      } else {
        vm.message = 'I am logged in';
      }
    });
  }

  vm.logmeout = function() {
    UserService.logout();
  };

};

HomeController.$inject = ['UserService', '$state'];

export default HomeController;