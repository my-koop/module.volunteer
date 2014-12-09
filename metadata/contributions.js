var contributions = {
    user: {
        myAccount: {
            timeworked: {
                titleKey: "volunteer::timeWorkedTab",
                component: {
                    resolve: "component",
                    value: "TimeWorked"
                },
                hash: "timeworked",
                priority: 225,
                permissions: {
                    volunteering: {
                        hours: {
                            enter: true
                        }
                    }
                }
            }
        }
    }
};
module.exports = contributions;
