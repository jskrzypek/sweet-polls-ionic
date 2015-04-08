'use strict';
var controllername = 'HomeCtrl';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$state'];

    function controller($state) {
        var vm = this;
        vm.message = 'Hello World';
        var goToLogin = function() {
            $state.go('login');
        };
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};