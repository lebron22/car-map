import React from "react";
import { Popup } from "react-leaflet";
import { ICarObject } from "../../../interfaces";
import "./PopupElement.scss";

export interface PopupElementProps {
  activeObject: ICarObject;
  setActiveObject: React.Dispatch<React.SetStateAction<ICarObject | null>>;
}

const PopupElement: React.FC<PopupElementProps> = ({
  activeObject: {
    address,
    batteryLevelPct,
    color,
    location,
    name,
    platesNumber,
    rangeKm,
    sideNumber
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
      <div className="popup">
        <h2 className="popup__name">{name}</h2>
        {platesNumber.indexOf(" ") < 0 && (
          <span className="popup__plates">{platesNumber}</span>
        )}
        <p className="popup__sidenumber">
          {sideNumber.length === 3 && `Numer boczny: ${sideNumber}`}
        </p>
        <p className="popup__range">{`Zasięg: ${rangeKm} km`}</p>
        <p className="popup__battery">{`Poziom baterii: ${batteryLevelPct} %`}</p>
        {address && <p className="popup__adress">{`Adres: ${address}`}</p>}
      </div>
    </Popup>
  );
};

export default PopupElement;
