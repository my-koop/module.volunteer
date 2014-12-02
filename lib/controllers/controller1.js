function controller1(req, res) {
    var self = this;

    var id = req.param("id");
    var value = req.param("value");

    var params = {
        id: parseInt(id) || 0,
        value: value
    };

    self.method1(params, function (err, ret) {
        if (err) {
            return res.error(err);
        }

        res.send(ret);
    });
}
;

module.exports = controller1;
