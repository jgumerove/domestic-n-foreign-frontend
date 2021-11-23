import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CountryCard extends Component {
    render() {
        const {name, flag, id, baseCount} = this.props
        return (
            <div className="country-card">
                <div>
                 <h5>Bases: {baseCount}</h5>
                </div>
                <div>
                <Link to={`/countries/${id}`}><img src={flag} alt={name} /></Link>
                </div>
                <div>
                 <Link to={`/countries/${id}`}><span>{name}</span></Link>
                </div>
                 
            </div>
        )
    }
}

export default CountryCard
