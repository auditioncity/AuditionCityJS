let LayoutController = function(UserService, $state, FILESERVER) {
  
  let vm = this;

  vm.logmeout = function() {
    UserService.logout();
  };

  vm.editmyprofile = function() {
   if (FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] == null || '') {
      $state.go('root.login')
    } else {
    $state.go('root.editmyprofile');
    }  
  };

  vm.gohome = function() {
    if (FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] == null || '') {
      $state.go('root.login')
    } else {
      $state.go('root.home');
    }
  };

  vm.goprofile = function() {
    if (FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] == null || '') {
      $state.go('root.login')
    } else {
      $state.go('root.myprofile');
    }
  };

  // vm.goact = function() {
  //   if (FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] === null) {
  //     $state.go('root.login')
  //   } else {
  //   $state.go('root.actorinfo');
  //   }  
  // };

};

LayoutController.$inject = ['UserService', '$state', 'FILESERVER'];

export default LayoutController;