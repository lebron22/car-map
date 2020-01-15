import React, { useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import { ICarObject } from "../../interfaces";
import PopupElement from "./PopupElement/PopupElement";
import Markers from "./Markers/Markers";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "./Map.scss";

const MapElement: React.FC = () => {
  const [activeObject, setActiveObject] = useState<null | ICarObject>(null);

  return (
    <Map center={[52.187511, 20.930528]} zoom={10} maxZoom={19}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup maxClusterRadius={30}>
        <Markers setActiveObject={setActiveObject} />
      </MarkerClusterGroup>

      {activeObject && (
        <PopupElement
          activeObject={activeObject}
          setActiveObject={setActiveObject}
        />
      )}
    </Map>
  );
};

export default MapElement;
