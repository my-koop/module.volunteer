import metaData   = require("../../metadata/index");
import utils = require("mykoop-utils");
import endpoints = require("../../metadata/endpoints");
import validation = require("../validation/index");

// Controllers
import getAvailabilities  = require ("./getAvailabilities");
import updateAvailability = require ("./updateAvailability");

var endPoints = metaData.endpoints;

export function attachControllers(
  binder: utils.ModuleControllersBinder<mkvolunteer.Module>
) {
  var volunteer = binder.moduleInstance;


  binder.attach(
    {
      endPoint: endPoints.volunteer.list
    },
    getAvailabilities
  );

  binder.attach(
    {
      endPoint: endPoints.volunteer.update,
      validation: validation.eventObject
    },
    updateAvailability
  );
}
