import React, { Component } from 'react'
import './App.css';
import "leaflet/dist/leaflet.css";
import WorldMapContainer from './WorldMapContainer';



class App extends Component {
    render() {
      return (
      <div>
      <WorldMapContainer />
    </div>
      )
  }
}

export default App
