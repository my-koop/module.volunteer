var endpoints = {
	availability: {
		list: {
	      path: "/availability/list",
	      method: "get"
	    },
	    listByUser: {
	      path: "/availability/user/:idUser/list",
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
	      path: "/availability/:id",
	      method: "get"
	    },
	    remove: {
	      path: "/availability/:id",
	      method: "delete"
	    }
	}
}
export = endpoints;
