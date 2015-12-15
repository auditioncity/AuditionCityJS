let myProfileController = function(UserService) {
  
  let vm = this;
  vm.untitle = "My Profile";

  vm.actor = UserService.myProfile().then( (result) => {
    // console.log(result);
    let actor = result.data.actor;
    vm.actor = actor;
    console.log(actor);
  });


  // return $http({
  //     method: 'GET',
  //     url: FILESERVER.URL + 'actors/' + $cookies.get('actor_id'),
  //     headers: {
  //         'Access-Token': $cookies.get('authToken')
  //     },
  //   }).then( (result) => {
  //   // console.log(result);
  //   let actor = result.data.actor;
  //   vm.actor = actor;
  //   // $scope.actor = actor;
  // });

};

myProfileController.$inject = ['UserService'];

export default myProfileController;