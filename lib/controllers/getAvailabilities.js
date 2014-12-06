function getAvailabilities(req, res) {
    var self = this;
    var data = {
        idUser: req.param("idUser") ? Number(req.param("idUser")) : null
    };
    self.getAvailabilities(data, function (err, availabilities) {
        if (err) {
            res.error(err);
            return;
        }
        res.send({
            availabilities: availabilities
        });
    });
}
;
module.exports = getAvailabilities;
