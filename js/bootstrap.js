/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */


define([
    'require',
    'angular',
    //'html5shiv',
    //'respond',
    'app'
], function (require, ng) {
    'use strict';
    require(['require','css!cssui-bootstrap','css!cssanimate','css!../css/sticky-footer-navbar'
    ], function(){
    });
    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */
    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);

    });
});
