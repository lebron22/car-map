import React from "react";
import { Popup } from "react-leaflet";
import { PopupElementProps } from "../../../interfaces";
import "./PopupElement.scss";

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
        {color && (
          <p className="popup__color">
            Kolor:
            <span style={{ backgroundColor: color }}></span>
          </p>
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
