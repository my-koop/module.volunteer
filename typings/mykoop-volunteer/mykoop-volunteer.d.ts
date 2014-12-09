// Type definitions for module v0.0.0
// Project: https://github.com/my-koop/service.website
// Definitions by: Michael Ferris <https://github.com/Cellule/>
// Definitions: https://github.com/my-koop/type.definitions

/// <reference path="../mykoop/mykoop.d.ts" />
/// <reference path="./interfaces.d.ts" />
declare module mkvolunteer {
  export interface Module extends mykoop.IModule {
    getAvailabilities(
      getAvailabilitiesData: AvailabilityInterfaces.GetAvailabilitiesData,
      callback: (err: Error, result?: Availability[]) => void
    );
    addTimeWorked(
      params: AvailabilityInterfaces.TimeWorked,
      callback: (err: Error) => void
    );
    __addTimeWorked(
      connection: mysql.IConnection,
      params: AvailabilityInterfaces.TimeWorked,
      callback: (err: Error) => void
    );
    timeWorkedReport(
      params: AvailabilityInterfaces.TimeWorkedReport,
      callback: (err: Error, any) => void
    );
    __timeWorkedReport(
      connection: mysql.IConnection,
      params: AvailabilityInterfaces.TimeWorkedReport,
      callback: (err: Error, any) => void
    );
  }

  export interface Availability {
    idAvailability      : number;
    idUser              : number;
    startSunday         : String;
    endSunday           : String;
    startMonday         : String;
    endMonday           : String;
    startTuesday        : String;
    endTuesday          : String;
    startWednesday      : String;
    endWednesday        : String;
    startThursday       : String;
    endThursday         : String;
    startFriday         : String;
    endFriday           : String;
    startSaturday       : String;
    endSaturday         : String;
  }
}

