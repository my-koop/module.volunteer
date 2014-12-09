function addRoutes(metaData) {
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer"],
        path: "volunteer/",
        permissions: {
            volunteering: {
                availabilities: {
                    view: true
                }
            }
        },
    });
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "availabilities"],
        component: "AvailabilitiesPage",
        name: "volunteerAvailabilities",
        path: "availabilities/",
        permissions: {
            volunteering: {
                availabilities: {
                    view: true
                }
            }
        },
    });
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "report"],
        component: "TimeWorkedReport",
        name: "timeWorkedReport",
        path: "volunteer/report/"
    });
}
exports.addRoutes = addRoutes;
