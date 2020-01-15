import React from "react";
import Switch from "../../../Switch/Switch";
import "./SwitchFilter.scss";
import { SwitchFilterProps } from "../../../../interfaces";

const SwitchFilter: React.FC<SwitchFilterProps> = ({ icon, title, type }) => {
  return (
    <div className="switch-filter">
      <Switch type={type} />
      <img src={icon} alt={`${type} icon`} className="switch-filter__icon" />
      <p className="switch-filter__info">{title}</p>
    </div>
  );
};

export default SwitchFilter;
