'use strict';
require('angular-ui-router');
require('angular-ionic');
require('ngCordova');
require('js-data');
require('js-data-angular');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'ionic', 'ngCordova', 'js-data']);
    // inject:folders start
    require('./controllers')(app);
    require('./services')(app);
    // inject:folders end

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                url: '/',
                template: require('./views/home.html'),
                controller: fullname + '.HomeCtrl',
                controllerAs: 'vm'
            });
            $stateProvider.state('login', {
                url: '/login',
                template: require('./views/login.html')
                    // controller: fullname + '.LoginCtrl',
                    // controllerAs: 'vm'
            });
            $stateProvider.state('list', {
                url: '/list',
                template: require('./views/listView.html'),
                controller: fullname + '.listViewCtrl',
                controllerAs: 'vm'
            });
        }
    ]);

    app.config(['$cordovaFacebookProvider',
        function($cordovaFacebookProvider) {
            var appID = 438928069615035;
            var version = "v2.3"; // or leave blank and default is v2.0
            $cordovaFacebookProvider.browserInit(appID, version);
        }
    ]);

    app.config(function(DSProvider) {
        DSProvider.defaults.basePath = '/myApi'; // etc.
        DSProvider.defaults.idAttribute = 'key'; // etc.
    });

    return app;
};
