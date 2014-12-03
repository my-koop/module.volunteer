var Availability = (function () {
    function Availability(row) {
        this.id = Number(row.idAvailability);
        this.idUser = Number(row.idUser);
        this.startDate = row.startDate;
        this.endDate = row.endDate;
        this.firstName = row.firstName;
        this.lastName = row.lastName;
    }
    Availability.COLUMNS_DB = ["idAvailability", "idUser", "startDate", "endDate"];
    return Availability;
})();
module.exports = Availability;
