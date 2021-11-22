import React, { Component } from 'react'
import { connect } from 'react-redux'

class CountryContainer extends Component {
    render() {
        console.log(this.props.countries)
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {countries: state.countries}
  }

export default connect(mapStateToProps)(CountryContainer)
