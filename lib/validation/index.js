// see http://validatejs.org/ for documentation on how to do contraints
var validate = require("mykoop-utils/common").validation;
function eventObject(obj) {
    var updateDataConstraint = {
        id: {
            numericality: {
                onlyInteger: true,
                greaterThan: 0
            }
        },
        value: {
            length: {
                minimum: 5
            }
        }
    };
    return validate(obj, updateDataConstraint);
}
exports.eventObject = eventObject;
