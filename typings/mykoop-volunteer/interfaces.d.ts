declare module AvailabilityInterfaces {

  export interface GetAvailabilitiesData {
    idUser          : number;
  }

  export interface TimeWorked {
    idUser: number;
    duration: number;
    date: Date;
  }

  export interface TimeWorkedReport {
    toDate: Date;
    fromDate: Date;
  }
}