import angular from 'angular';

import HomeController from './controllers/home.controller';
import UserService from './services/user.service';

angular
  .module('app.layout', [require('angular-cookies')])
  .controller('HomeController', HomeController)
  .service('UserService', UserService)
;