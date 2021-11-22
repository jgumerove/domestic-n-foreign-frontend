import React, { Component } from 'react'

class CountryCard extends Component {
    render() {
        const {name, flag} = this.props
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
