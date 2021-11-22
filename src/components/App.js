import React, { Component } from 'react'
import './App.css';
import "leaflet/dist/leaflet.css";
import WorldMapContainer from './WorldMapContainer';
import CountryContainer from './CountryContainer';



class App extends Component {
  
    render() {
      return (
      <div>
        <WorldMapContainer />
        <CountryContainer />
      </div>
      )
  }
}



export default App
