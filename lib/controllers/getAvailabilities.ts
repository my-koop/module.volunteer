import express        = require("express");
import Availability   = require("../classes/Availability");
    
function getAvailabilities(req: express.Request, res: express.Response) {
  var self: mkvolunteer.Module = this;

  var data = {
    idUser     : req.param("idUser") ? Number(req.param("idUser")) : null,
    startDate  : req.param("startDate") ? new Date(req.param("startDate")) : null,
    endDate    : req.param("endDate") ? new Date(req.param("endDate")) : null,
  };
  
  self.getAvailabilities(data, function(err, availabilities: Availability[]) {
    if (err) {
      res.error(err);
      return;
    }

    res.send({
      availabilities: availabilities
    });
  });
};

export = getAvailabilities;
