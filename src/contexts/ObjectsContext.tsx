import React, { useState, useEffect, createContext } from "react";
import { ICarObject, IObjectContextTheme } from "../interfaces";
import _ from "lodash";
import { URL } from "../api/api";

export const ObjectContext = createContext<Partial<IObjectContextTheme>>({});

const ObjectContextProvider: React.FC = ({ children }) => {
  const [objects, setObjects] = useState<[] | ICarObject[]>([]);

  /*
   STATUS(SWITCH TYPE): AVAILABLE/UNAVAILABLE
   VALUE(SWITCH STATE): TRUE/FALSE
   */
  const filterByAvailabilityStatus = (status: string, value: boolean) => {
    const updatedObjects = _.map(objects, (object: ICarObject) =>
      object.status === status
        ? { ...object, hiddenByStatus: value }
        : { ...object }
    );
    setObjects([...updatedObjects]);
  };

  const filterByBatteryLevel = (batteryLevel: number) => {
    const updatedObjects = _.map(objects, (object: ICarObject) =>
      object.batteryLevelPct < batteryLevel
        ? { ...object, hiddenByBatteryLevel: true }
        : { ...object, hiddenByBatteryLevel: false }
    );
    setObjects([...updatedObjects]);
  };

  const getDataFromApi = async () => {
    try {
      const res = await fetch(URL);
      const { objects } = await res.json();
      if (!res.ok || !objects.length) {
        throw new Error(`Kod błędu ${res.status}`);
      }
      const updatedObjects = _.map(objects, (object: ICarObject) => {
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
      setObjects(updatedObjects);
    } catch (error) {
      alert(`Nie można pobrać danych o położeniu obiektów. ${error}`);
    }
  };

  useEffect(() => {
    getDataFromApi();
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
