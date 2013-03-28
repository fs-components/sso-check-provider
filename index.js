/**
 * Module dependencies
 */
var xdm = require("easyXDM")
  , cookie = require("cookie");

module.exports = function(name, options) {

  if(!options) options = {};

  var rpc = new xdm.Rpc(options, {
    local: {
      loggedIn: function(success, error) {
        return typeof cookie(name) !== "undefined";
      }
    }
  });

};
