var endpoints = require("../../metadata/endpoints");
var getAvailabilities = require("./getAvailabilities");
function attachControllers(binder) {
    var volunteer = binder.moduleInstance;
    binder.attach({
        endPoint: endpoints.availability.list
    }, getAvailabilities);
}
exports.attachControllers = attachControllers;
