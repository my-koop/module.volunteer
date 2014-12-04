import utils = require("mykoop-utils");
export function addRoutes(metaData: utils.MetaDataBuilder) {
  metaData.addFrontendRoute({
    idPath: ["dashboard", "volunteer"],
    path: "volunteer/",
  });

  metaData.addFrontendRoute({
    idPath: ["dashboard", "volunteer", "volunteerAvailabilities"],
    component: "VolunteerAvailabilitiesPage",
    name: "volunteerAvailabilities",
    path: "list/",
  });

  metaData.addFrontendRoute({
    idPath: ["dashboard", "volunteer", "volunteerAvailabilitiesByUser"],
    component: "VolunteerAvailabilitiesPage",
    name: "volunteerAvailabilitiesByUser",
    path: "list/user/:idUser",
  });
}
