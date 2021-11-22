import React, { Component } from 'react'
import './App.css';
import "leaflet/dist/leaflet.css";
import CountriesIndex from '../containers/CountriesIndex';

class App extends Component {
  
    render() {
      return (
      <div>
        <CountriesIndex />
      </div>
      )
  }
}

export default App
