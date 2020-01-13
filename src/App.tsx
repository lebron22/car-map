import React from "react";
import MapElement from "./components/Map/MapElement";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";

const App: React.FC = () => {
  return (
    <>
      <MapElement />
      <Toolbar />
    </>
  );
};

export default App;
