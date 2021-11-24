import React, { Component } from 'react'
import CountryContainer from '../containers/CountryContainer'
import Greeting from './Greeting'
import WorldMapContainer from '../containers/WorldMapContainer'
import { Link } from 'react-router-dom'


class CountriesIndex extends Component {
    render() {
        return (
            <div>
                <Greeting />
                <WorldMapContainer /><br/>
                <CountryContainer />
                <div><Link to="/about"><h3>About Us</h3></Link></div>  
            </div>
        )
    }
}

export default CountriesIndex
