var endpoints = require("../../metadata/endpoints");
var getAvailabilities = require("./getAvailabilities");
function attachControllers(binder) {
    var volunteer = binder.moduleInstance;
    binder.attach({
        endPoint: endpoints.availability.list,
        permissions: {
            volunteering: {
                availabilities: {
                    view: true
                },
            }
        }
    }, getAvailabilities);
    binder.attach({
        endPoint: endpoints.timeworked.add,
    }, binder.makeSimpleController(volunteer.addTimeWorked, function (req) {
        return {
            idUser: req.session.user.id,
            date: req.param("date"),
            duration: parseInt(req.param("duration"))
        };
    }));
    binder.attach({
        endPoint: endpoints.timeworked.report,
    }, binder.makeSimpleController(volunteer.timeWorkedReport, function (req) {
        return {
            fromDate: new Date(req.param("fromDate")),
            toDate: new Date(req.param("toDate"))
        };
    }));
}
exports.attachControllers = attachControllers;
