var endpoints = {
    availability: {
        list: {
            path: "/availability/list/:idUser/:startDate/:endDate",
            method: "get"
        },
        update: {
            path: "/availability/update/",
            method: "post",
            validation: {
                resolve: "validation",
                value: "availabilityObject"
            }
        },
        add: {
            path: "/availability/",
            method: "post",
            validation: {
                resolve: "validation",
                value: "availabilityObject"
            }
        },
        get: {
            path: "/availability/:idAvailability",
            method: "get"
        },
        remove: {
            path: "/availability/:idAvailability",
            method: "delete"
        }
    }
};
module.exports = endpoints;
