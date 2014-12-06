import utils      = require("mykoop-utils");
import endpoints  = require("../../metadata/endpoints");
import validation = require("../validation/index");

import getAvailabilities  = require ("./getAvailabilities");


export function attachControllers(
  binder: utils.ModuleControllersBinder<mkvolunteer.Module>
) {
  var volunteer = binder.moduleInstance;

  binder.attach(
    {
      endPoint: endpoints.availability.list
    },
    getAvailabilities
  );
}
