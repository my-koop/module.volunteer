import utils = require("mykoop-utils");
export function addRoutes(metaData: utils.MetaDataBuilder) {
  metaData.addFrontendRoute({
    idPath: ["dashboard", "volunteer"],
    path: "volunteer/",
  });

  metaData.addFrontendRoute({
    idPath: ["dashboard", "volunteer", "availabilities"],
    component: "AvailabilitiesPage",
    name: "volunteerAvailabilities",
    path: "availabilities/",
  });

}
