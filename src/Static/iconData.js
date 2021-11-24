import L from 'leaflet';
import nutcracker from './nutcracker.png'

export const nutcrackerIcon = () => L.icon({
    iconUrl: nutcracker,
    iconSize: [20, 45], //to make icon size smaller
    iconAnchor: [10, 41] //to fix position on zoom-out
  }
  );