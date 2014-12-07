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
}
exports.attachControllers = attachControllers;
