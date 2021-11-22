import React, { Component } from 'react'
import CountryContainer from '../components/CountryContainer'
import WorldMapContainer from '../components/WorldMapContainer'

class CountriesIndex extends Component {
    render() {
        return (
            <div>
                <WorldMapContainer />
                <CountryContainer />
            </div>
        )
    }
}

export default CountriesIndex
