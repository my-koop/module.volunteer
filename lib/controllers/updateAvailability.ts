import express      = require("express");
import Availability = require("../classes/Availability");
import getLogger    = require("mykoop-logger");
var logger          = getLogger(module);

function updateAvailability(req: express.Request, res: express.Response) {
  var self: mkvolunteer.Module = this;
  var data = {
    idAvailability      : Number(req.param("idAvailability")),
    idUser              : Number(req.param("idUser")),
    startDate           : req.param("startDate") ? new Date(req.param("startDate")) : null,
    endDate             : req.param("endDate") ? new Date(req.param("endDate")) : null,
  };
  
  self.updateAvailability(data, function(err) {
    if (err) {
      logger.error(err);
      return res.error(err);
    }

    res.end();
  });
};

export = updateAvailability;
