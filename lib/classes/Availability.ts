class Availability implements mkvolunteer.Availability {
  public  idAvailability      : number;
  public  idUser              : number;
  public  firstName           : string;
  public  lastName            : string;
  public  fullName            : string;
  public  startSunday         : String;
  public  endSunday           : String;
  public  startMonday         : String;
  public  endMonday           : String;
  public  startTuesday        : String;
  public  endTuesday          : String;
  public  startWednesday      : String;
  public  endWednesday        : String;
  public  startThursday       : String;
  public  endThursday         : String;
  public  startFriday         : String;
  public  endFriday           : String;
  public  startSaturday       : String;
  public  endSaturday         : String;

  constructor(row: any) {
    this.idAvailability      = Number(row.idAvailability);
    this.idUser              = Number(row.idUser);
    this.firstName           = row.firstName;
    this.lastName            = row.lastName;
    this.fullName            = this.firstName + " " + this.lastName;
    this.startSunday         = row.startSunday ? row.startSunday : "";
    this.endSunday           = row.endSunday ? row.endSunday : "";
    this.startMonday         = row.startMonday ? row.startMonday : "";
    this.endMonday           = row.endMonday ? row.endMonday : "";
    this.startTuesday        = row.startTuesday ? row.startTuesday : "";
    this.endTuesday          = row.endTuesday ? row.endTuesday : "";
    this.startWednesday      = row.startWednesday ? row.startWednesday : "";
    this.endWednesday        = row.endWednesday ? row.endWednesday : "";
    this.startThursday       = row.startThursday ? row.startThursday : "";
    this.endThursday         = row.endThursday ? row.endThursday : "";
    this.startFriday         = row.startFriday ? row.startFriday : "";
    this.endFriday           = row.endFriday ? row.endFriday : "";
    this.startSaturday       = row.startSaturday ? row.startSaturday : "";
    this.endSaturday         = row.endSaturday ? row.endSaturday : "";
  }
}

export = Availability;