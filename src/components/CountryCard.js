import React, { Component } from 'react'

class CountryCard extends Component {
    render() {
        console.log(this.props)
        const {name, flag} = this.props
        return (
            <div>
                 <span>{name}</span>
            </div>
        )
    }
}

export default CountryCard
