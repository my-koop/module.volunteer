var metaData = require("../../metadata/index");
var validation = require("../validation/index");
// Controllers
var getAvailabilities = require("./getAvailabilities");
var updateAvailability = require("./updateAvailability");
var endPoints = metaData.endpoints;
function attachControllers(binder) {
    var volunteer = binder.moduleInstance;
    binder.attach({
        endPoint: endPoints.volunteer.list
    }, getAvailabilities);
    binder.attach({
        endPoint: endPoints.volunteer.update,
        validation: validation.eventObject
    }, updateAvailability);
}
exports.attachControllers = attachControllers;
