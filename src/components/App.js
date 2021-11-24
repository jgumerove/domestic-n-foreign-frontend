import React, { Component } from 'react'
import './App.css';
import "leaflet/dist/leaflet.css";
import CountriesIndex from './CountriesIndex';
import CountryShow from './CountryShow';
import About from './About';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  
    render() {
      return (
      <div>
        <Switch>
           <Route path="/countries/:id" component={CountryShow}/>
           <Route path="/countries"><CountriesIndex /></Route>
           <Route path="/about"><About /></Route>
           <Route exact path="/"><CountriesIndex/></Route>
        </Switch>
      </div>
      )
  }
}

export default App
