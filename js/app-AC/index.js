import angular from 'angular';
import '../app-core/index';

import RegisterActorController from './controllers/registerActor.controller';
import LoginController from './controllers/login.controller';

angular
  .module('app.AC', ['app.core'])
  .controller('RegisterActorController', RegisterActorController)
  .controller('LoginController', LoginController)
;