import React, { useState, useEffect } from "react";
import MapElement from "./components/Map/MapElement";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import * as carData from "./data/car-data.json";
import { ICarObject } from "./interfaces";
import _ from "lodash";

const App: React.FC = () => {
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
    <>
      <MapElement />
      <Toolbar />
    </>
  );
};

export default App;
