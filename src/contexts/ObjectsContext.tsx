import React, { useState, useEffect, createContext } from "react";
import * as carData from "../data/car-data.json";
import { ICarObject } from "../interfaces";
import _ from "lodash";

export interface ObjectContextProviderProps {}

export interface ITheme {
  objects: [] | ICarObject[];
  setObjects: React.Dispatch<React.SetStateAction<[] | ICarObject[]>>;
}

export const ObjectContext = createContext<Partial<ITheme>>({});

const ObjectContextProvider: React.FC<ObjectContextProviderProps> = ({
  children
}) => {
  const [objects, setObjects] = useState<[] | ICarObject[]>([]);

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
      return { ...pickedProperties, isVisible: true };
    });
    setObjects(objects);
  }, []);

  return (
    <ObjectContext.Provider value={{ objects, setObjects }}>
      {children}
    </ObjectContext.Provider>
  );
};

export default ObjectContextProvider;
