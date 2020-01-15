import React from "react";
import MapElement from "./Map/MapElement";
import Toolbar from "./Toolbar/Toolbar";
import ObjectContextProvider from "../contexts/ObjectsContext";

const App: React.FC = () => {
  return (
    <ObjectContextProvider>
      <MapElement />
      <Toolbar />
    </ObjectContextProvider>
  );
};

export default App;
