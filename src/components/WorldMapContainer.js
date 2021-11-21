import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/fetchCountries';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

//source: https://github.com/PaulLeCam/react-leaflet/issues/453
let DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [20, 30], //to make icon size smaller
  iconAnchor: [10, 41] //to fix position on zoom-out
  //shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


class WorldMapContainer extends Component {

  componentDidMount() {
    // fetch('http://localhost:3000/countries')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
     this.props.fetchCountries()
  }
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
      <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true} //to fix continent reptition
      />
        {test.map((p) =>{
           return (<Marker position={[p.lat, p.long]} key={p.location} >
                      <Popup>
                       <span>{p.location}</span>
                     </Popup>
                 </Marker>)
                  })}
    </MapContainer>
        )
    }
}

export default connect(null, { fetchCountries })(WorldMapContainer)
