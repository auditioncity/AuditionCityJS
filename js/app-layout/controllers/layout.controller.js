let LayoutController = function(UserService, $state, FILESERVER) {
  
  let vm = this;

  vm.logmeout = function() {
  UserService.logout();
  };

  vm.goact = function() {
    if (FILESERVER.CONFIG.headers['X-AUTH-TOKEN'] === null) {
      $state.go('root.login')
    } else {
    $state.go('root.actorinfo');
    }  
  };

};

LayoutController.$inject = ['UserService', '$state', 'FILESERVER'];

export default LayoutController;