export interface ICarObject {
  address: null | string;
  batteryLevelPct: number;
  color: string;
  hiddenByStatus: boolean;
  hiddenByBatteryLevel: boolean;
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  name: string;
  platesNumber: string;
  rangeKm: number;
  sideNumber: string;
  status: string;
}

//CONTEXT INTERFACES

export interface IObjectContextTheme {
  objects: [] | ICarObject[];
  setObjects: React.Dispatch<React.SetStateAction<[] | ICarObject[]>>;
  filterByAvailabilityStatus: (status: string, value: boolean) => void;
  filterByBatteryLevel: (batteryLevel: number) => void;
}

//COMPONENTS PROPS INTERFACES

export interface MarkersProps {
  setActiveObject: React.Dispatch<React.SetStateAction<ICarObject | null>>;
}

export interface PopupElementProps {
  activeObject: ICarObject;
  setActiveObject: React.Dispatch<React.SetStateAction<ICarObject | null>>;
}

export interface SwitchProps {
  type: string;
}

export interface SwitchFilterProps {
  icon: string;
  title: string;
  type: string;
}
