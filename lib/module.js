var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var utils = require("mykoop-utils");
var controllerList = require("./controllers/index");
var getLogger = require("mykoop-logger");
var logger = getLogger(module);
var DatabaseError = utils.errors.DatabaseError;
var ApplicationError = utils.errors.ApplicationError;
var Module = (function (_super) {
    __extends(Module, _super);
    function Module() {
        _super.apply(this, arguments);
    }
    Module.prototype.init = function () {
        controllerList.attachControllers(new utils.ModuleControllersBinder(this));
    };
    Module.prototype.updateAvailability = function (data, callback) {
    };
    Module.prototype.getAvailabilities = function (data, callback) {
    };
    Module.prototype.getAvailability = function (data, callback) {
    };
    Module.prototype.addAvailability = function (data, callback) {
    };
    return Module;
})(utils.BaseModule);
module.exports = Module;
