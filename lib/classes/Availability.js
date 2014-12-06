var Availability = (function () {
    function Availability(row) {
        this.idAvailability = Number(row.idAvailability);
        this.idUser = Number(row.idUser);
        this.firstName = row.firstName;
        this.lastName = row.lastName;
        this.fullName = this.firstName + " " + this.lastName;
        this.startSunday = row.startSunday ? row.startSunday : "";
        this.endSunday = row.endSunday ? row.endSunday : "";
        this.startMonday = row.startMonday ? row.startMonday : "";
        this.endMonday = row.endMonday ? row.endMonday : "";
        this.startTuesday = row.startTuesday ? row.startTuesday : "";
        this.endTuesday = row.endTuesday ? row.endTuesday : "";
        this.startWednesday = row.startWednesday ? row.startWednesday : "";
        this.endWednesday = row.endWednesday ? row.endWednesday : "";
        this.startThursday = row.startThursday ? row.startThursday : "";
        this.endThursday = row.endThursday ? row.endThursday : "";
        this.startFriday = row.startFriday ? row.startFriday : "";
        this.endFriday = row.endFriday ? row.endFriday : "";
        this.startSaturday = row.startSaturday ? row.startSaturday : "";
        this.endSaturday = row.endSaturday ? row.endSaturday : "";
    }
    return Availability;
})();
module.exports = Availability;
