let AddActorService = function(FILESERVER) {
  
// turn this into a controller and service then ping tim

        // var formData = new FormData();
        // formData.append("file", $scope.actor);

        // return $http({
        //     method: 'POST',
        //     url: URL + '/actors/new',
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Access-Token': FILESERVER.CONFIG.headers.X-AUTH-TOKEN
        //     },
        //     data: {
        //         formData
        //     },
        //     transformRequest: formDataObject
        // }).
        // then(function(result) {
        //     console.log(result);
        //     return result.data;
        // });

};

AddActorService.$inject = ['FILESERVER'];

export default AddActorService;