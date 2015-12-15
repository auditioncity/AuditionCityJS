let LayoutController = function($cookies, UserService, $state, FILESERVER) {
  
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
      $state.go('root.myprofile', {id: $cookies.get('actor_id')});
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

LayoutController.$inject = ['$cookies', 'UserService', '$state', 'FILESERVER'];

export default LayoutController;