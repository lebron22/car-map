import L from "leaflet";
import availableImg from "../../../imgs/car-round_available-3.svg";
import unavailableImg from "../../../imgs/car-round_unavailable-3.svg";

export const availableIcon = L.icon({
  iconUrl: availableImg,
  iconSize: [50, 50],
  iconAnchor: [25, 0]
});

export const unavailableIcon = L.icon({
  iconUrl: unavailableImg,
  iconSize: [50, 50],
  iconAnchor: [25, 0]
});
