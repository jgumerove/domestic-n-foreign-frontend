import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CountryMapContainer from '../components/CountryMapContainer'


export class CountryShow extends Component {
    render() {
        return (
            <div>
                <CountryMapContainer />
                <br></br>
                <Link to="/countries">Go back</Link>
            </div>
        )
    }
}

export default CountryShow
