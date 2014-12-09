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
}
exports.attachControllers = attachControllers;
