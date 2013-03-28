/**
 * Module dependencies
 */
var xdm = require("easyXDM")
  , cookie = require("cookie");

module.exports = function(name) {

  var rpc = new xdm.Rpc({},
  {
    local: {
      loggedIn: function(success, error) {
        return typeof cookie(name) !== undefined;
      }
    }
  });

};
