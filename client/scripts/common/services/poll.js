'use strict';
var servicename = 'Poll';

module.exports = function(app) {

    var dependencies = ['DS'];

    function service(DS) {
        return DS.defineResource('poll');
    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};