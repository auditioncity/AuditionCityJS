let HomeController = function(UserService, $state) {
  
  let vm = this;
  vm.title = 'AuditionCity';
  vm.actorpool = [];

  UserService.actors().then( (result) => {
    // console.log(result);
    vm.actorpool = result.data.actors;
    // vm.actors = actors;
    console.log('hey list', vm.actorpool);
  });

};

HomeController.$inject = ['UserService', '$state'];

export default HomeController;