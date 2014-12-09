function addRoutes(metaData) {
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer"],
        path: "volunteer"
    });
    /*FIXME: Make it work.
    metaData.addFrontendRoute({
      idPath: ["dashboard", "volunteer", "availabilities"],
      component: "AvailabilitiesPage",
      name: "volunteerAvailabilities",
      path: "availabilities",
      permissions: {
        volunteering: {
          availabilities: {
            view: true
          }
        }
      },
    });
    */
    metaData.addFrontendRoute({
        idPath: ["dashboard", "volunteer", "report"],
        component: "TimeWorkedReport",
        name: "timeWorkedReport",
        path: "report",
        permissions: {
            volunteering: {
                hours: {
                    report: true
                }
            }
        },
        i18nKey: "volunteer::timeWorkedTab"
    });
}
exports.addRoutes = addRoutes;
