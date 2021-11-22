import React, { Component } from 'react'
import { connect } from 'react-redux'
import CountryCard from './CountryCard'

class CountryContainer extends Component {
    render() {
        return (
            <div className="country-container">
                {this.props.countries.map((country) => {
                    return(
                        <CountryCard {...country} key={country.id} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {countries: state.countries}
  }

export default connect(mapStateToProps)(CountryContainer)
