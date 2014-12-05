import utils 			      = require("mykoop-utils");
import controllerList 	= require("./controllers/index");
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

  updateAvailability(data: AvailabilityInterfaces.UpdateAvailabilityData, callback: (err?: Error) => void) {

  }

  getAvailabilities(data: AvailabilityInterfaces.GetAvailabilitiesData, callback: (err: Error, result?: Availability[]) => void) {
    var availabilities = [];

    this.db.getConnection(function(err, connection, cleanup) {
      if(err) {
        return callback(new DatabaseError(err));
      }

      var queryParams = [];

      var query = connection.query(
        "SELECT a.idAvailability, a.idUser, u.firstname as firstName, u.lastname as lastName, a.startDate, a.endDate  " +
        "FROM availability a " +
        "JOIN user u on u.id = a.idUser " + 
        "WHERE (CASE WHEN ? IS NOT NULL THEN idUser = ? ELSE true END) " + 
        "AND (CASE WHEN ? IS NOT NULL THEN startDate >= ? ELSE true END) " + 
        "AND (CASE WHEN ? IS NOT NULL THEN endDate <= ? ELSE true END) " + 
        "ORDER BY startDate, endDate",
        [data.idUser, data.idUser, data.startDate, data.startDate, data.endDate, data.endDate],
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

  getAvailability(data: AvailabilityInterfaces.GetAvailabilityData, callback: (err: Error, result?: Availability) => void) {

  }

  addAvailability(data: AvailabilityInterfaces.AddAvailabilityData, callback: (err?: Error) => void) {

  }
}

export = Module;
