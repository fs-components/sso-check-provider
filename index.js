/**
 * Module dependencies
 */
var xdm = require("easyXDM")
  , cookie = require("cookie");

module.exports = function(cb, options) {

  if(!options) options = {};

  if (typeof cb === "string") {
    var name = cb;
    cb = function(success, error) {
      return typeof cookie(name) !== "undefined";
    };
  };

  var rpc = new xdm.Rpc(options, {
    local: {
      loggedIn: cb
    }
  });

};
