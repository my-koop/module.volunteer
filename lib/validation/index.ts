// see http://validatejs.org/ for documentation on how to do contraints
var validate = require("mykoop-utils/common").validation;

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
}
export function get1(obj) {
  return validate(obj, updateDataConstraint);
}
