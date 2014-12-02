import express = require("express");

function controller1(req: express.Request, res: express.Response) {
  var self: mkmymodule.Module = this;

  var id = req.param("id");
  var value = req.param("value");

  var params = {
    id: parseInt(id) || 0,
    value: value
  };

  self.method1(params, function(err, ret: mkmymodule.ModuleClass1) {
    if (err) {
      return res.error(err);
    }

    res.send(ret);
  });
};

export = controller1;
