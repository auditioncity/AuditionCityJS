import angular from 'angular';
import '../app-core/index';

import RegisterActorController from './controllers/registerActor.controller';

angular
  .module('app.AC', ['app.core'])
  .controller('RegisterActorController', RegisterActorController)
;