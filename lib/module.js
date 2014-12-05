var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var utils = require("mykoop-utils");
var controllerList = require("./controllers/index");
var getLogger = require("mykoop-logger");
var Availability = require("./classes/Availability");
var logger = getLogger(module);
var DatabaseError = utils.errors.DatabaseError;
var ApplicationError = utils.errors.ApplicationError;
var Module = (function (_super) {
    __extends(Module, _super);
    function Module() {
        _super.apply(this, arguments);
    }
    Module.prototype.init = function () {
        this.db = this.getModuleManager().get("database");
        controllerList.attachControllers(new utils.ModuleControllersBinder(this));
    };
    Module.prototype.updateAvailability = function (data, callback) {
    };
    Module.prototype.getAvailabilities = function (data, callback) {
        var availabilities = [];
        this.db.getConnection(function (err, connection, cleanup) {
            if (err) {
                return callback(new DatabaseError(err));
            }
            var queryParams = [];
            var query = connection.query("SELECT a.idAvailability, a.idUser, u.firstname as firstName, u.lastname as lastName, a.startDate, a.endDate  " + "FROM availability a " + "JOIN user u on u.id = a.idUser " + "WHERE (CASE WHEN ? IS NOT NULL THEN idUser = ? ELSE true END) " + "AND (CASE WHEN ? IS NOT NULL THEN startDate >= ? ELSE true END) " + "AND (CASE WHEN ? IS NOT NULL THEN endDate <= ? ELSE true END) " + "ORDER BY startDate, endDate", [data.idUser, data.idUser, data.startDate, data.startDate, data.endDate, data.endDate], function (err, rows) {
                cleanup();
                if (err) {
                    return callback(new DatabaseError(err));
                }
                for (var i in rows) {
                    availabilities.push(new Availability(rows[i]));
                }
                callback(null, availabilities);
            });
        });
    };
    Module.prototype.getAvailability = function (data, callback) {
    };
    Module.prototype.addAvailability = function (data, callback) {
    };
    return Module;
})(utils.BaseModule);
module.exports = Module;
