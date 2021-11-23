import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class CountryShow extends Component {
    render() {
        return (
            <div>
                <span>Country Bases here</span>
                <br></br>
                <Link to="/countries">Go back</Link>
            </div>
        )
    }
}

export default CountryShow
