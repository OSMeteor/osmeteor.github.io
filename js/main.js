/**
 * Created by meteor on 15/5/26.
 */
require.config({
    //config: {
    //    text: {
    //        //Valid values are 'node', 'xhr', or 'rhino'
    //        env: 'node'
    //    }
    //},
    baseUrl: '../dev/js',
    paths: {
        "html5shiv":["http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"],
        "respond":["http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"],
        'requirecss': [
              "http://cdn.bootcss.com/require-css/0.1.8/css.js",
            '../../bower_components/require-css/css'],
        'angular': ["http://cdn.bootcss.com/angular.js/1.3.15/angular.min.js"
            ,'../../bower_components/angular/angular'],
        'angular-ui-router':[
            "http://cdn.bootcss.com/angular-ui-router/0.2.15/angular-ui-router.js",
            '../../bower_components/angular-ui-router/release/angular-ui-router'],
        'angular-ui-bootstrap':[
            "http://cdn.bootcss.com/angular-ui-bootstrap/0.13.0/ui-bootstrap.min.js",
            '../../bower_components/angular-ui-router/release/angular-ui-router'],
        'cssui-bootstrap':[
            "http://cdn.bootcss.com/bootstrap/3.3.4/css/bootstrap.min.css"
        ],
        'cssanimate':[
            "http://cdn.bootcss.com/animate.css/3.3.0/animate.css"
        ]
        //
        ////'angular-resource':['../../bower_components/angular-resource/angular-resource'],
        //'restangular':['../../bower_components/restangular/dist/restangular'],
        //'lodash':['../../bower_components/lodash/dist/lodash'],
        //'angular-route-styles':['../../bower_components/angular-route-styles/ui-route-styles'],
        //'angular-touch':['../../bower_components/angular-touch/angular-touch'],
        //'angular-bootstrap':['../../bower_components/angular-bootstrap/ui-bootstrap-tpls'],
        //'angular-animate':['../../bower_components/angular-animate/angular-animate'],
        //'domReady':['../../bower_components/requirejs-domready/domReady']
        //,"angular-file-upload":['../../bower_components/ng-file-upload/angular-file-upload-all']
        //,'jscolor':['../lib/jscolor/jscolor']
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        "angular": {
            exports: 'angular'
        },
        "angular-ui-router":{
            deps: ['angular']
        },
        'angular-ui-bootstrap':{
            deps: ['angular']
        }

        //'lodash':{
        //    exports: '_'
        //},
        //'restangular':{
        //    deps: ['angular','lodash']
        //},
        //'angular-animate':{
        //    deps: ['angular']
        //},
        //'angular-route-styles':{
        //    deps: ['angular-ui-router']
        //},
        //'angular-touch':{
        //    deps: ['angular']
        //},
        //'angular-bootstrap':{
        //    deps: ['angular']
        //}
        //,"angular-file-upload":{
        //    deps: ['angular']
        //}
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ],
    urlArgs: "bust=" +  (new Date()).getTime()
});