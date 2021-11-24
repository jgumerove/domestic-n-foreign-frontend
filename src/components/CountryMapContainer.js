import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CountryMapContainer extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                Map here
                <br></br>    
                <Link to="/countries">Go back</Link>
            </div>
        )
    }
}

export default CountryMapContainer
