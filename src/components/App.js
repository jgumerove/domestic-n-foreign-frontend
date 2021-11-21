import React, { Component } from 'react'
//will delete the below
import { connect } from 'react-redux'
import { fetchCountries } from '../actions/fetchCountries';
import './App.css';
import "leaflet/dist/leaflet.css";
import WorldMapContainer from './WorldMapContainer';
import CountryContainer from './CountryContainer';



class App extends Component {

  componentDidMount() {
    // fetch('http://localhost:3000/countries')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
     this.props.fetchCountries()
  }

  
    render() {
      console.log(this.props)
      return (
      <div>
        <WorldMapContainer />
        <CountryContainer />
      </div>
      )
  }
}



export default connect(null, {fetchCountries})(App)
