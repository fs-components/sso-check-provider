/**
 * Module dependencies
 */
var xdm = require("easyXDM");

module.exports = function(cb, options) {

  if(!options) options = {};

  var rpc = new xdm.Rpc(options, {
    local: {
      loggedIn: cb
    }
  });

};
