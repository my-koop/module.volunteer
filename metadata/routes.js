function addRoutes(metaData) {
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
exports.addRoutes = addRoutes;
