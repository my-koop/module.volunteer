function addRoutes(metaData) {
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "volunteerAvailabilities"],
        component: "VolunteerAvailabilities",
        name: "VolunteerAvailabilities",
        path: "volunteer/list/",
    });
}
exports.addRoutes = addRoutes;
