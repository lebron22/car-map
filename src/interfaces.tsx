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
