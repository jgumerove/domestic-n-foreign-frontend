import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCountry } from '../actions/fetchCountry';


class CountryMapContainer extends Component {
    componentDidMount() {
        const routeId = this.props.routeId
        this.props.fetchCountry(routeId)
     }

     render() {
         console.log(this.props)
         const { selectedCountry } = this.props
        return (
            <div>
                Map here {selectedCountry.name}
                <br></br>    
                <Link to="/countries">Go back</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {selectedCountry: state.selectedCountry}
  }

export default connect(mapStateToProps, { fetchCountry })(CountryMapContainer)
