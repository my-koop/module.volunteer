function addRoutes(metaData) {
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "volunteerAvailabilities"],
        component: "VolunteerAvailabilities",
        name: "volunteerAvailabilities",
        path: "volunteer/list/",
    });
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "volunteerAvailabilitiesByUser"],
        component: "VolunteerAvailabilities",
        name: "volunteerAvailabilitiesByUser",
        path: "volunteer/list/user/:idUser",
    });
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "addAvailabilities"],
        component: "AddAvailabilitiesPage",
        name: "addVolunteerAvailabilitiesPage",
        path: "availabilities/add/",
    });
}
exports.addRoutes = addRoutes;
