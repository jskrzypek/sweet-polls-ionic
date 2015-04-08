'use strict';
var controllername = 'LoginCtrl';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$cordovaFacebook'];

    function controller($cordovaOauth) {
        var vm = this;
        vm.facebookLogin = function() {
        $cordovaOauth.facebook('438928069615035', ['email', 'common']).then(function(result) {
            // results
        }, function(error) {
            // error
        });
    };
        var activate = function() {

        };
        activate();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};