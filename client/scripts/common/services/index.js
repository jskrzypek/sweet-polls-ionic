'use strict';

module.exports = function(app) {
    // inject:start
    require('./poll')(app);
    require('./question')(app);
    // inject:end
};