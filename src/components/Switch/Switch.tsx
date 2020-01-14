import React, { useState } from "react";
import "./Switch.scss";

export interface SwitchProps {}

const Switch: React.FC<SwitchProps> = () => {
  const [isChecked, handleCheck] = useState<boolean>(true);
  return (
    <input
      className="switch-input"
      type="checkbox"
      checked={isChecked}
      onChange={() => handleCheck(isChecked => !isChecked)}
    />
  );
};

export default Switch;
