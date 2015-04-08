'use strict';

module.exports = function(app) {
    // inject:start
    require('./homeCtrl')(app);
    require('./listViewCtrl')(app);
    require('./loginCtrl')(app);
    // inject:end
};