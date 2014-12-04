var metaData = require("../../metadata/index");
var validation = require("../validation/index");
// Controllers
var getAvailabilities = require("./getAvailabilities");
var updateAvailability = require("./updateAvailability");
var endPoints = metaData.endpoints;
function attachControllers(binder) {
    var volunteer = binder.moduleInstance;
    binder.attach({
        endPoint: endPoints.availability.list
    }, getAvailabilities);
    binder.attach({
        endPoint: endPoints.availability.user.list
    }, getAvailabilities);
    binder.attach({
        endPoint: endPoints.availability.update,
        validation: validation.availabilityObject //FIXME : Validation incomplete
    }, updateAvailability);
}
exports.attachControllers = attachControllers;
