let HomeController = function(UserService, $state) {
  
  let vm = this;
  vm.title = 'AuditionCity';

  vm.actors = UserService.actors().then( (result) => {
    // console.log(result);
    let actors = result.data.actors;
    vm.actors = actors;
    console.log(actors);
  });

};

HomeController.$inject = ['UserService', '$state'];

export default HomeController;