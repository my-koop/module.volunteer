var endpoints = {
    availability: {
        user: {
            list: {
                path: "/availability/user/list/:idUser",
                method: "get"
            },
        },
        list: {
            path: "/availability/list/",
            method: "get"
        },
        update: {
            path: "/availability/:idAvailability",
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
