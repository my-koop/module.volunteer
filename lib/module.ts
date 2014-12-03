import utils 			= require("mykoop-utils");
import controllerList 	= require("./controllers/index");
import getLogger        = require("mykoop-logger");
import async            = require("async");
import Availability     = require("./classes/Availability");

var logger              = getLogger(module);
var DatabaseError       = utils.errors.DatabaseError;
var ApplicationError    = utils.errors.ApplicationError;

class Module extends utils.BaseModule implements mkvolunteer.Module {
  init() {
    controllerList.attachControllers(new utils.ModuleControllersBinder(this));
  }

  updateAvailability(data: AvailabilityInterfaces.UpdateAvailabilityData, callback: (err?: Error) => void) {
  	
  }

  getAvailabilities(data: AvailabilityInterfaces.GetAvailabilitiesData, callback: (err: Error, result?: Availability[]) => void) {

  }

  getAvailability(data: AvailabilityInterfaces.GetAvailabilityData, callback: (err: Error, result?: Availability) => void) {

  }

}

export = Module;
