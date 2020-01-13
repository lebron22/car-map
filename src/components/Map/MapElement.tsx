import React from "react";
import { Map, TileLayer } from "react-leaflet";

export interface MapElementProps {}

const MapElement: React.FC<MapElementProps> = () => {
  return (
    <Map center={[52.187511, 20.930528]} zoom={19} maxZoom={19}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default MapElement;
