import React, { useState } from "react";
import settingsImg from "../../imgs/settings-white.svg";
import availableImg from "../../imgs/car-round_available-3.svg";
import unavailableImg from "../../imgs/car-round_unavailable-3.svg";
import "./Toolbar.scss";
import SwitchFilter from "./Filters/SwitchFilter/SwitchFilter";
import RangeFilter from "./Filters/RangeFilter/RangeFilter";

export interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={isOpen ? "toolbar open" : "toolbar"}>
      <div className="settings">
        <button className="settings__btn" onClick={() => setIsOpen(!isOpen)}>
          <img
            className="settings__icon"
            src={settingsImg}
            alt="settings icon"
          />
        </button>
      </div>
      <div className="filters">
        <SwitchFilter
          icon={availableImg}
          title="Pojazdy dostępne"
          type={"AVAILABLE"}
        />
        <SwitchFilter
          icon={unavailableImg}
          title="Pojazdy niedostępne"
          type={"UNAVAILABLE"}
        />
        <RangeFilter />
      </div>
    </div>
  );
};

export default Toolbar;
