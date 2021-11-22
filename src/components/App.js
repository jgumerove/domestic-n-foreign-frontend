import React, { Component } from 'react'
import './App.css';
import "leaflet/dist/leaflet.css";
import CountriesIndex from '../containers/CountriesIndex';
import { Switch, Route } from 'react-router-dom'

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
