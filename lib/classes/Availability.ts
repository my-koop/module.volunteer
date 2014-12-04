class Availability implements mkvolunteer.Availability {
  public  id                  : number;
  public  idUser              : number;
  public  firstName           : string;
  public  lastName            : string;
  public  startDate           : Date;
  public  endDate             : Date;

  constructor(row: any) {
    this.id                  = Number(row.idAvailability);
    this.idUser              = Number(row.idUser);
    this.startDate           = row.startDate;
    this.endDate             = row.endDate;
    this.firstName           = row.firstName;
    this.lastName            = row.lastName;
  }
}

export = Availability;