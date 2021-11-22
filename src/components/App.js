import React, { Component } from 'react'
import './App.css';
import "leaflet/dist/leaflet.css";
import CountriesIndex from '../containers/CountriesIndex';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  
    render() {
      return (
      <div>
        <Switch>
           <Route path="/countries"><CountriesIndex /></Route>
        </Switch>
      </div>
      )
  }
}

export default App
