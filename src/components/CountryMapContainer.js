import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCountry } from '../actions/fetchCountry';


class CountryMapContainer extends Component {
    componentDidMount() {
        const routeId = this.props.match.params.id
        this.props.fetchCountry(routeId)
     }

     render() {
        return (
            <div>
                Map here 
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
