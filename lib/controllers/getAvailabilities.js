function getAvailabilities(req, res) {
    var self = this;
    var data = {
        idUser: req.param("idAvailability") ? Number(req.param("idAvailability")) : null,
        startDate: req.param("startDate") ? new Date(req.param("startDate")) : null,
        endDate: req.param("endDate") ? new Date(req.param("endDate")) : null,
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
