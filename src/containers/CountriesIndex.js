import React, { Component } from 'react'
import CountryContainer from '../components/CountryContainer'
import Greeting from '../components/Greeting'
import WorldMapContainer from '../components/WorldMapContainer'

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
