import React, { useContext } from "react";
import _ from "lodash";
import { Marker } from "react-leaflet";
import { ObjectContext } from "../../../contexts/ObjectsContext";
import { availableIcon, unavailableIcon } from "../Icons/Icons";
import { ICarObject } from "../../../interfaces";

export interface MarkersProps {
  setActiveObject: React.Dispatch<React.SetStateAction<ICarObject | null>>;
}

const Markers: React.FC<MarkersProps> = ({ setActiveObject }) => {
  const { objects } = useContext(ObjectContext);

  const renderObjectsMarkers = () =>
    _.map(
      objects,
      (object: ICarObject) =>
        !object.hiddenByStatus &&
        !object.hiddenByBatteryLevel && (
          <Marker
            key={object.id}
            position={[object.location.latitude, object.location.longitude]}
            onClick={() => {
              setActiveObject(object);
            }}
            icon={
              object.status === "AVAILABLE" ? availableIcon : unavailableIcon
            }
          />
        )
    );

  return <>{renderObjectsMarkers()}</>;
};

export default Markers;
