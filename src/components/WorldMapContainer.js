import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

//source: https://github.com/PaulLeCam/react-leaflet/issues/453
let DefaultIcon = L.icon({
  iconUrl: icon,
  iconAnchor: [10, 41],
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class WorldMapContainer extends Component {
    render() {
        const position = [51.505, -0.09]
        const test = [{
            lat: 51.505,
            long: -0.09,
            location: "London"
        }, {
            lat: 55.7558,
            long: 37.6173,
            location: "Moscow"
        }]
        return (
      <MapContainer center={position} zoom={3} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {test.map((p) =>{
         return (<Marker position={[p.lat, p.long]} >
              <Popup>
                  <span>{p.location}</span>
              </Popup>
          </Marker>)
      })}
      {/* <Marker position={position}>
        <Popup>
           <span>Look at the Popup</span>
        </Popup>
      </Marker> */}
    </MapContainer>
        )
    }
}

export default WorldMapContainer
