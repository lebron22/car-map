export interface ICarObject {
  address: null | string;
  batteryLevelPct: number;
  color: string;
  id: string;
  isVisible: boolean;
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
