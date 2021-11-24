import React, { Component } from 'react'
import CountryContainer from '../containers/CountryContainer'
import Greeting from './Greeting'
import WorldMapContainer from '../containers/WorldMapContainer'

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
