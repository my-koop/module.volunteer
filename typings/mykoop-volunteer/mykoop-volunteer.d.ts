// Type definitions for module v0.0.0
// Project: https://github.com/my-koop/service.website
// Definitions by: Michael Ferris <https://github.com/Cellule/>
// Definitions: https://github.com/my-koop/type.definitions

/// <reference path="../mykoop/mykoop.d.ts" />
/// <reference path="./dbQueryStruct.d.ts" />
/// <reference path="./interfaces.d.ts" />
declare module mkvolunteer {
  export interface Module extends mykoop.IModule {
    updateAvailability(
      updateData: AvailabilityInterfaces.UpdateAvailabilityData,
      callback: (err: Error, result?: boolean) => void
    );

    getAvailability(
      getAvailabilityData: AvailabilityInterfaces.GetAvailabilityData,
      callback: (err: Error, result?: Availability) => void
    );

    getAvailabilities(                
      getAvailabilitiesData: AvailabilityInterfaces.GetAvailabilitiesData,
      callback: (err: Error, result?: Availability[]) => void
    );
  }

  export interface Availability {
    id                  : number;
    idUser              : number;
    startDate           : Date;
    endDate             : Date;
  }
}

