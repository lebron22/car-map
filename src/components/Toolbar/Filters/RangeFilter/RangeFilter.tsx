import React, { useState, useContext, useEffect } from "react";
import { ObjectContext } from "../../../../contexts/ObjectsContext";
import "./RangeFilter.scss";

const RangeFilter: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);
  const { filterByBatteryLevel } = useContext(ObjectContext);

  useEffect(() => {
    filterByBatteryLevel!(batteryLevel);
  }, [batteryLevel]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBatteryLevel(+e.target.value);
  };

  return (
    <div className="range-filter">
      <p className="range-filter__info">min: {batteryLevel}%</p>
      <input
        type="range"
        className="slider"
        value={batteryLevel}
        step="10"
        min="0"
        max="100"
        onChange={e => handleRangeChange(e)}
      ></input>
      <p className="range-filter__info">Poziom baterii</p>
    </div>
  );
};

export default RangeFilter;
