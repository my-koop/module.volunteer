// see http://validatejs.org/ for documentation on how to do contraints
var validate = require("mykoop-utils/common").validation;
function availabilityObject(obj) {
    var updateDataConstraint = {};
    return validate(obj, updateDataConstraint);
}
exports.availabilityObject = availabilityObject;
