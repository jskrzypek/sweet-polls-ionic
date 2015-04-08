'use strict';
var controllername = 'listViewCtrl';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.questions = [];
        for(var i = 0; i < 10; i++) {
            vm.questions[i] = {
                name: i,
                items: []
            };
            for(var j = 0; j < 3; j++) {
                vm.questions[i].items.push(i + '-' + j);
            }
        }

        /*
         * if given question is the selected question, deselect it
         * else, select the given question
         */
        vm.toggleQuestion = function(question) {
            if(vm.isQuestionShown(question)) {
                vm.shownQuestion = null;
            } else {
                vm.shownQuestion = question;
            }
        };
        vm.isQuestionShown = function(question) {
            return vm.shownQuestion === question;
        };
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
