class Availability implements mkvolunteer.Availability {
  public static COLUMNS_DB = ["idAvailability", "idUser", "startDate", "endDate"];
  public  id                  : number;
  public  idUser              : number;
  public  firstName           : string;
  public  lastName            : string;
  public  startDate           : Date;
  public  endDate             : Date;
  public  fullName            : string;

  constructor(row: any) {
    this.id                  = Number(row.idAvailability);
    this.idUser              = Number(row.idUser);
    this.startDate           = row.startDate;
    this.endDate             = row.endDate;
    this.firstName           = row.firstName;
    this.lastName            = row.lastName;
    this.fullName            = this.firstName + " " + this.lastName;
  }
}

export = Availability;