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
var _ = require("lodash");
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
    Module.prototype.getAvailabilities = function (data, callback) {
        var availabilities = [];
        this.db.getConnection(function (err, connection, cleanup) {
            if (err) {
                return callback(new DatabaseError(err));
            }
            var queryParams = [];
            var query = connection.query("SELECT u.firstname as firstName, u.lastname as lastName, startSunday, endSunday, startMonday, endMonday, startTuesday, " + "endTuesday, startWednesday, endWednesday, startThursday, endThursday, " + "startFriday, endFriday, startSaturday, endSaturday FROM availabilities a " + "JOIN user u ON u.id = a.idUser", [], function (err, rows) {
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
    Module.prototype.addTimeWorked = function (params, callback) {
        this.callWithConnection(this.__addTimeWorked, params, callback);
    };
    Module.prototype.__addTimeWorked = function (connection, params, callback) {
        connection.query("INSERT INTO timeworked SET ?", [params], function (err, rows) {
            return callback(err && new DatabaseError(err));
        });
    };
    Module.prototype.timeWorkedReport = function (params, callback) {
        this.callWithConnection(this.__timeWorkedReport, params, callback);
    };
    Module.prototype.__timeWorkedReport = function (connection, params, callback) {
        logger.verbose(params, {});
        var query = connection.query("SELECT \
          user.id as id, \
          concat(user.firstname,' ', user.lastname) as name, \
          SUM(duration) as hours \
        FROM timeworked \
        INNER JOIN user on timeworked.idUser = user.id  \
        WHERE (timeworked.date BETWEEN ? AND ?)  \
        group by user.id", [params.fromDate, params.toDate], function (err, rows) {
            callback(err && new DatabaseError(err), {
                reports: _.map(rows, function (report) {
                    return report;
                })
            });
        });
    };
    return Module;
})(utils.BaseModule);
module.exports = Module;
