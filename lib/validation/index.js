// see http://validatejs.org/ for documentation on how to do contraints
var validate = require("mykoop-utils/common").validation;
function addTimeWorked(obj) {
    var addTimeWorkedConstraint = {
        duration: {
            presence: { message: "^notFound" },
            numericality: {
                onlyInteger: { message: "^notInteger" },
                greaterThan: 0,
                message: "^invalid"
            }
        },
        date: {
            datetime: {
                message: "^invalid",
                latest: new Date()
            },
        }
    };
    return validate(obj, addTimeWorkedConstraint);
}
exports.addTimeWorked = addTimeWorked;
