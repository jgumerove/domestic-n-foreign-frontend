import React, { Component } from 'react'
import './App.css';
import "leaflet/dist/leaflet.css";
import CountriesIndex from '../containers/CountriesIndex';
import CountryShow from '../containers/CountryShow';
import { Switch, Route } from 'react-router-dom'
import CountryMapContainer from './CountryMapContainer';

class App extends Component {
  
    render() {
      return (
      <div>
        <Switch>
           <Route path="/countries/:id" component={CountryMapContainer}/>
           <Route path="/countries"><CountriesIndex /></Route>
           <Route exact path="/"><CountriesIndex/></Route>
        </Switch>
      </div>
      )
  }
}

export default App
