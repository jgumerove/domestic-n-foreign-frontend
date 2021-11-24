import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCountry } from '../actions/fetchCountry';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import nutcracker from '../Static/nutcracker.png'
import L from 'leaflet';
import CountryHeader from '../components/CountryHeader';

let DefaultIcon = L.icon({
    iconUrl: nutcracker,
    iconSize: [20, 45], //to make icon size smaller
    iconAnchor: [10, 41] //to fix position on zoom-out
  });

 L.Marker.prototype.options.icon = DefaultIcon;

class CountryMapContainer extends Component {
    componentDidMount() {
        const routeId = this.props.routeId
        this.props.fetchCountry(routeId)
     }

     render() {
         console.log(this.props)
         const { selectedCountry } = this.props
        return (
            <div>
               <CountryHeader name={selectedCountry.name} />
               <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    noWrap={true}
                     />
                    {selectedCountry.places.map(({baseLong, baseLat, id, location, baseType})=> {
                        return (
                        <Marker position={[baseLong, baseLat]} key={id}>
                            <Popup>
                                <span>Location: {location}</span><br/>
                                <span>Base-type: {baseType}</span>
                            </Popup>    
                        </Marker>
                        )
                    })}
                </MapContainer><br/>
                <Link to="/countries">Go back</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {selectedCountry: state.selectedCountry}
  }

export default connect(mapStateToProps, { fetchCountry })(CountryMapContainer)
