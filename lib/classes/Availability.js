var Availability = (function () {
    function Availability(row) {
        this.id = Number(row.idAvailability);
        this.idUser = Number(row.idUser);
        this.startDate = row.startDate;
        this.endDate = row.endDate;
        this.firstName = row.firstName;
        this.lastName = row.lastName;
        this.fullName = this.firstName + " " + this.lastName;
    }
    return Availability;
})();
module.exports = Availability;
