import L from "leaflet";

export const availableIcon = L.icon({
  iconUrl: "/untitled4.svg",
  iconSize: [30, 30],
  iconAnchor: [15, 0]
});

export const unavailableIcon = L.icon({
  iconUrl: "/car-marker.svg",
  iconSize: [50, 50],
  iconAnchor: [25, 0]
});
