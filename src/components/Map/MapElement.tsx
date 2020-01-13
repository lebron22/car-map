import React, { useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { ICarObject } from "../../interfaces";
import _ from "lodash";
import PopupElement from "./PopupElement/PopupElement";
import { availableIcon, unavailableIcon } from "./Icons/Icons";

export interface MapElementProps {
  objects: [] | ICarObject[];
}

const MapElement: React.FC<MapElementProps> = ({ objects }) => {
  const [activeObject, setActiveObject] = useState<null | ICarObject>(null);

  const renderObjectsMarkers = () =>
    _.map(objects, (object: ICarObject) => (
      <Marker
        key={object.id}
        position={[object.location.latitude, object.location.longitude]}
        onClick={() => {
          setActiveObject(object);
        }}
        icon={object.status === "AVAILABLE" ? availableIcon : unavailableIcon}
      />
    ));

  return (
    <Map center={[52.187511, 20.930528]} zoom={19} maxZoom={19}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {renderObjectsMarkers()}
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
