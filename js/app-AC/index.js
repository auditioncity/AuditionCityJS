import angular from 'angular';
import '../app-core/index';

import registerActorController from './controllers/registerActor.controller';
import LoginController from './controllers/login.controller';

angular
  .module('app.AC', ['app.core'])
  .controller('registerActorController', registerActorController)
  .controller('LoginController', LoginController)
;