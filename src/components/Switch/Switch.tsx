import React, { useState, useContext } from "react";
import "./Switch.scss";
import { ObjectContext } from "../../contexts/ObjectsContext";

export interface SwitchProps {
  type: string;
}

const Switch: React.FC<SwitchProps> = ({ type }) => {
  const [isChecked, setCheck] = useState<boolean>(true);
  const { filterByAvailabilityStatus } = useContext(ObjectContext);

  const handleInputChange = () => {
    setCheck(isChecked => !isChecked);
    filterByAvailabilityStatus!(type, isChecked);
  };

  return (
    <input
      className="switch-input"
      type="checkbox"
      checked={isChecked}
      onChange={() => handleInputChange()}
    />
  );
};

export default Switch;
