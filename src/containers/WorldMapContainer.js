import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/fetchCountries';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import nutcracker from '../Static/nutcracker.png'
import L from "leaflet"

class WorldMapContainer extends Component {

  componentDidMount() {
     this.props.fetchCountries()
  }

  defaultIcon(){
    return L.icon({
       iconUrl: nutcracker,
       iconSize: [20, 45], //to make icon size smaller
       iconAnchor: [10, 41] //to fix position on zoom-out
       }
     )}

    render() {
    const { countries } = this.props
    return (
      <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true} //to fix continent reptition
      />
        {countries.map(({long, lat, id, name}) =>{
           return (<Marker icon={this.defaultIcon()}position={[long, lat]} key={id} >
                      <Popup>
                      <Link to={`/countries/${id}`}><span>{name}</span></Link>
                     </Popup>
                 </Marker>)
                  })}
    </MapContainer>
        )
    }
}

const mapStateToProps = (state) => {
  return {countries: state.countries}
}

export default connect(mapStateToProps, { fetchCountries })(WorldMapContainer)
