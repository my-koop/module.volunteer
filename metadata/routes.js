function addRoutes(metaData) {
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
exports.addRoutes = addRoutes;
