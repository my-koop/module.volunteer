class Availability implements mkvolunteer.Availability {
  public static COLUMNS_DB = ["idAvailability", "idUser", "startDate", "endDate"];
  public  id                  : number;
  public  idUser              : number;
  public  startDate           : Date;
  public  endDate             : Date;

  constructor(row: any) {
    this.id                  = Number(row.idAvailability);
    this.idUser              = Number(row.idUser);
    this.startDate           = row.startDate;
    this.endDate             = row.endDate;
  }
}

export = Availability;