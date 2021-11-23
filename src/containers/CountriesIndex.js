import React, { Component } from 'react'
import CountryContainer from '../components/CountryContainer'
import WorldMapContainer from '../components/WorldMapContainer'

class CountriesIndex extends Component {
    render() {
        return (
            <div>
                <h1>🎄🎄🎄Welcome to Domestic and Foreign🎄🎄🎄</h1>
                <WorldMapContainer />
                <br></br>
                <CountryContainer />
            </div>
        )
    }
}

export default CountriesIndex
