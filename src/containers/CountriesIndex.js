import React, { Component } from 'react'
import CountryContainer from './CountryContainer'
import Greeting from '../components/Greeting'
import WorldMapContainer from './WorldMapContainer'

class CountriesIndex extends Component {
    render() {
        return (
            <div>
                <Greeting />
                <WorldMapContainer /><br/>
                <CountryContainer />
            </div>
        )
    }
}

export default CountriesIndex
