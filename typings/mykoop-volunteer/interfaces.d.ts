declare module AvailabilityInterfaces {
  export interface GetAvailabilityData {
    idAvailability  : number;
  }

  export interface GetAvailabilitiesData {
    idUser          : number;
    startDate       : Date;
    endDate         : Date;      
  }

  export interface UpdateAvailabilityData {
    idAvailability  : number;
    idUser          : number;
    startDate       : Date;
    endDate         : Date;
  }

  export interface AddAvailabilityData {
    idUser          : number;
    startDate       : Date;
    endDate         : Date;
  }
}