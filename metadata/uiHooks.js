var uiHooks = {
    sidebar: {
        volunteering: {
            type: "item",
            content: {
                icon: "clock-o",
                text: "volunteer::sidebar.volunteers",
                link: "timeWorkedReport"
            },
            priority: 125,
            permissions: {
                volunteering: {
                    hours: {
                        report: true
                    }
                }
            }
        }
    }
};
module.exports = uiHooks;
