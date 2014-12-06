import utils            = require("mykoop-utils");
import controllerList   = require("./controllers/index");
import getLogger        = require("mykoop-logger");
import async            = require("async");
import Availability     = require("./classes/Availability");

var logger              = getLogger(module);
var DatabaseError       = utils.errors.DatabaseError;
var ApplicationError    = utils.errors.ApplicationError;

class Module extends utils.BaseModule implements mkvolunteer.Module {
  private db: mkdatabase.Module;

  init() {
    this.db = <mkdatabase.Module>this.getModuleManager().get("database");
    controllerList.attachControllers(new utils.ModuleControllersBinder(this));
  }

  getAvailabilities(data: AvailabilityInterfaces.GetAvailabilitiesData, callback: (err: Error, result?: Availability[]) => void) {
    var availabilities = [];

    this.db.getConnection(function(err, connection, cleanup) {
      if(err) {
        return callback(new DatabaseError(err));
      }

      var queryParams = [];

      var query = connection.query(
        "SELECT u.firstname as firstName, u.lastname as lastName, startSunday, endSunday, startMonday, endMonday, startTuesday, " + 
        "endTuesday, startWednesday, endWednesday, startThursday, endThursday, " +
        "startFriday, endFriday, startSaturday, endSaturday FROM availabilities a " +
        "JOIN user u ON u.id = a.idUser",
        [],
        function(err, rows) {
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
  }
}

export = Module;
