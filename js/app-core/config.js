let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      controller: 'LayoutController as vm',
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-AC/login.tpl.html'
    })
    .state('root.registeractor', {
      url: '/registeractor',
      controller: 'registerActorController as vm',
      templateUrl: 'templates/app-AC/registeractor.tpl.html'
    })
    .state('root.editmyprofile', {
      url: '/editmyprofile/:id',
      controller: 'editMyProfileController as vm',
      templateUrl: 'templates/app-AC/editmyprofile.tpl.html'
    })
    .state('root.myprofile', {
      url: '/myprofile/:id',
      controller: 'myProfileController as vm',
      templateUrl: 'templates/app-AC/myprofile.tpl.html'
    })
    .state('root.search', {
      url: '/search',
      controller: 'searchController as vm',
      templateUrl: 'templates/app-AC/search.tpl.html'
    })
    ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;