import React, { Component } from 'react'
import CountryContainer from './CountryContainer'
import WorldMapContainer from './WorldMapContainer'

class App extends Component {
    render() {
        return (
            <div>
                Hello world
                <WorldMapContainer />
                <CountryContainer />
            </div>
        )
    }
}

export default App
