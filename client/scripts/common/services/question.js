'use strict';
var servicename = 'Question';

module.exports = function(app) {

    var dependencies = ['DS'];

    function service(DS) {
        return DS.defineResource('question');
    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};