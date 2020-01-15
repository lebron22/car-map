import React, { useState, useEffect, createContext } from "react";
import * as carData from "../data/car-data.json";
import { ICarObject } from "../interfaces";
import _ from "lodash";

export interface ObjectContextProviderProps {}

export interface ITheme {
  objects: [] | ICarObject[];
  setObjects: React.Dispatch<React.SetStateAction<[] | ICarObject[]>>;
  filterByAvailabilityStatus: (status: string, value: boolean) => void;
  filterByBatteryLevel: (batteryLevel: number) => void;
}

export const ObjectContext = createContext<Partial<ITheme>>({});

const ObjectContextProvider: React.FC<ObjectContextProviderProps> = ({
  children
}) => {
  const [objects, setObjects] = useState<[] | ICarObject[]>([]);

  // // STATUS(SWITCH TYPE): AVAILABLE/UNAVAILABLE
  // // VALUE(SWITCH STATE): TRUE/FALSE
  const filterByAvailabilityStatus = (status: string, value: boolean) => {
    const updatedObjects = _.map(objects, (object: ICarObject) => {
      if (object.status === status) {
        return { ...object, hiddenByStatus: value };
      } else return { ...object };
    });
    setObjects([...updatedObjects]);
  };

  const filterByBatteryLevel = (batteryLevel: number) => {
    const updatedObjects = _.map(objects, (object: ICarObject) => {
      if (object.batteryLevelPct < batteryLevel) {
        return { ...object, hiddenByBatteryLevel: true };
      } else return { ...object, hiddenByBatteryLevel: false };
    });
    setObjects([...updatedObjects]);
  };

  useEffect(() => {
    const objects = carData.objects.map(object => {
      const pickedProperties = _.pick(object, [
        "address",
        "batteryLevelPct",
        "color",
        "id",
        "location",
        "name",
        "platesNumber",
        "rangeKm",
        "sideNumber",
        "status"
      ]);
      return {
        ...pickedProperties,
        hiddenByStatus: false,
        hiddenByBatteryLevel: false
      };
    });
    setObjects(objects);
  }, []);

  return (
    <ObjectContext.Provider
      value={{
        objects,
        setObjects,
        filterByAvailabilityStatus,
        filterByBatteryLevel
      }}
    >
      {children}
    </ObjectContext.Provider>
  );
};

export default ObjectContextProvider;
