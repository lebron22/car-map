import React from "react";
import { Popup } from "react-leaflet";
import { ICarObject } from "../../../interfaces";

export interface PopupElementProps {
  activeObject: ICarObject;
  setActiveObject: React.Dispatch<React.SetStateAction<ICarObject | null>>;
}

const PopupElement: React.FC<PopupElementProps> = ({
  activeObject: {
    name,
    sideNumber,
    location,
    status,
    color,
    rangeKm,
    batteryLevelPct
  },
  setActiveObject
}) => {
  return (
    <Popup
      position={[location.latitude, location.longitude]}
      onClose={() => {
        setActiveObject(null);
      }}
    >
      <div>
        <p>{`Pozycja: ${location.latitude},
      ${location.longitude}`}</p>
        <p>{`Pojazd: ${name},
      ${status}`}</p>
        <p>{`Numer boczny: ${sideNumber},
      ${color}`}</p>
        <p>{`Bateria: ${batteryLevelPct},
      ${rangeKm}`}</p>
      </div>
    </Popup>
  );
};

export default PopupElement;
