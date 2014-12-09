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
      endPoint: endpoints.availability.list,
      permissions: {
        volunteering: {
          availabilities: {
            view: true
          },
        }
      }
    },
    getAvailabilities
  );

  binder.attach(
    {
      endPoint: endpoints.timeworked.add,
      validation: validation.addTimeWorked,
      permissions: {
        volunteering: {
          hours: {
            enter: true
          }
        }
      }
    },
    binder.makeSimpleController(volunteer.addTimeWorked, function(req) {
      return {
        idUser: req.session.user.id,
        date: new Date(req.param("date")),
        duration: parseInt(req.param("duration")) || 0
      };
    })
  )

  binder.attach(
    {
      endPoint: endpoints.timeworked.report,
    },
    binder.makeSimpleController(volunteer.timeWorkedReport, function(req) {
      return {
        fromDate: new Date(req.param("fromDate")),
        toDate: new Date(req.param("toDate"))
      };
    })
  )
}
