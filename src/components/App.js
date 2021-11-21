import React, { Component } from 'react'
import './App.css';
import "leaflet/dist/leaflet.css";
import WorldMapContainer from './WorldMapContainer';
import CountryContainer from './CountryContainer';



class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/countries')
      .then(response => response.json())
      .then(data => console.log(data));
  }
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
