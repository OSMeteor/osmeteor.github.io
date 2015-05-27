/**
 * Created by meteor on 15/5/26.
 */
define([
    'angular',
    'angular-ui-bootstrap',
    'angular-ui-bootstrap-tpls',
    'angular-ui-router',
    './controllers/index'
],function(angular){
    'use strict';
    //return  angular.module('app', ['app.controllers','ui.router']);
    //return  angular.module('app', [ 'ui.bootstrap',
    //    'app.controllers'
    // ]);
    return angular.module('app', [
        'app.controllers',
        //'app.directives',
        //'app.filters',
        //'app.services',
        'ui.router'
        ,'ui.bootstrap'
    ]);
});