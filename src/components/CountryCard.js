import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CountryCard extends Component {
    render() {
        const {name, flag, id} = this.props
        return (
            <div className="country-card">
                <div>
                <img src={flag} alt={name} />
                </div>
                 <span>{name}</span>
            </div>
        )
    }
}

export default CountryCard
