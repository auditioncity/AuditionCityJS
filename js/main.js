import angular from 'angular';

import './app-core/index';
import './app-AC/index';



angular
  .module('app', ['app.core', 'app.AC', 'app.layout'])
;