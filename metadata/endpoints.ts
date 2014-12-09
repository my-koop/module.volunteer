var endpoints = {
  availability: {
    list: {
      path: "/availability/list/",
      method: "get"
    }
  },
  timeworked:{
    add: {
      path: "/volunteer/timeworked/",
      method: "post"
    },
    report: {
      path: "/volunteer/timeworked/report/",
      method: "get"
    }
  }
}
export = endpoints;
