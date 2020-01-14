import React, { useState } from "react";
import Switch from "../Switch/Switch";
import settingsImg from "../../imgs/settings-white.svg";
import availableImg from "../../imgs/car-round_available-3.svg";
import unavailableImg from "../../imgs/car-round_unavailable-3.svg";
import "./Toolbar.scss";

export interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [batteryLevel, setBatteryLevel] = useState<string>("0");

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBatteryLevel(e.target.value);
  };

  return (
    <div className={isOpen ? "toolbar open" : "toolbar"}>
      <div className="settings">
        <button className="settings__btn" onClick={() => setIsOpen(!isOpen)}>
          <img className="settings__icon" src={settingsImg} alt="settings" />
        </button>
      </div>
      <div className="toolbar__item">
        <Switch />
        <img src={availableImg} alt="available icon" className="item__icon" />
        <p className="item__info">Pojazdy dostępne</p>
      </div>
      <div className="toolbar__item">
        <Switch />
        <img src={unavailableImg} alt="available icon" className="item__icon" />
        <p className="item__info">Pojazdy niedostępne</p>
      </div>
      <div className="range">
        <p className="item__info">min. {batteryLevel}%</p>
        <input
          type="range"
          className="slider"
          value={batteryLevel}
          min="0"
          max="100"
          onChange={e => handleRangeChange(e)}
        ></input>
        <p className="item__info">Poziom baterii</p>
      </div>
    </div>
  );
};

export default Toolbar;
