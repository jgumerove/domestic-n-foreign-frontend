import React, { Component } from 'react'
import CountryMapContainer from '../containers/CountryMapContainer'


class CountryShow extends Component {
    render() {
        return (
            <div>
                <CountryMapContainer routeId={this.props.match.params.id}/>
            </div>
        )
    }
}

export default CountryShow
