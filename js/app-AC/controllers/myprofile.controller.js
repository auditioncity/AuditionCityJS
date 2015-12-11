let myProfileController = function($stateParams, $http, FILESERVER, $cookies) {
  
  let vm = this;
  vm.title = "My Profile";

  return $http({
      method: 'GET',
      url: FILESERVER.URL + 'actors/' + ($stateParams.id),
      headers: {
          'Access-Token': $cookies.get('authToken')
      },
    }).then( (result) => {
    console.log(result);
  });

};

myProfileController.$inject = ['$stateParams', '$http', 'FILESERVER', '$cookies'];

export default myProfileController;