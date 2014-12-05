function addRoutes(metaData) {
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer"],
        path: "volunteer/",
    });
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "volunteerAvailabilities"],
        component: "AvailabilitiesPage",
        name: "volunteerAvailabilities",
        path: "availabilities/",
    });
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "volunteerAvailabilitiesByUser"],
        component: "AvailabilitiesPage",
        name: "volunteerAvailabilitiesByUser",
        path: "availabilities/user/:idUser",
    });
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "addAvailabilities"],
        component: "AddAvailabilitiesPage",
        name: "addVolunteerAvailabilitiesPage",
        path: "availabilities/add/",
    });
}
exports.addRoutes = addRoutes;
