import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/fetchCountries';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import {nutcrackerIcon} from '../Static/iconData.js'

class WorldMapContainer extends Component {

  componentDidMount() {
     this.props.fetchCountries()
  }
    render() {
    console.log(this.props)
    const { countries } = this.props
    return (
      <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true} //to fix continent reptition
      />
        {countries.map(({long, lat, id, name}) =>{
           return (<Marker icon={nutcrackerIcon()}position={[long, lat]} key={id} >
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
