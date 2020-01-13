import React, { useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { ICarObject } from "../../interfaces";
import _ from "lodash";
import PopupElement from "./PopupElement/PopupElement";
import { icon } from "./Icons/Icons";

export interface MapElementProps {
  objects: [] | ICarObject[];
}

const MapElement: React.FC<MapElementProps> = ({ objects }) => {
  const [activeObject, setActiveObject] = useState<null | ICarObject>(null);

  const renderMarkers = () =>
    _.map(objects, (object: ICarObject) => (
      <Marker
        key={object.id}
        position={[object.location.latitude, object.location.longitude]}
        onClick={() => {
          setActiveObject(object);
        }}
        icon={icon}
      />
    ));

  return (
    <Map center={[52.187511, 20.930528]} zoom={19} maxZoom={19}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {renderMarkers()}
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
