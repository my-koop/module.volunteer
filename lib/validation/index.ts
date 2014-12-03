// see http://validatejs.org/ for documentation on how to do contraints
var validate = require("mykoop-utils/common").validation;

export function availabilityObject(obj) {
  var updateDataConstraint = {
    
  }
  
  return validate(obj, updateDataConstraint);
}
