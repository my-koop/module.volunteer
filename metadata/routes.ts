import utils = require("mykoop-utils");
export function addRoutes(metaData: utils.MetaDataBuilder) {
  metaData.addFrontendRoute({
    idPath: ["dashboard", "volunteer", "volunteerAvailabilities"],
    component: "VolunteerAvailabilities",
    name: "VolunteerAvailabilities",
    path: "volunteer/list/",
  });
}
