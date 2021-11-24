import React from 'react'
import { Link } from 'react-router-dom'

function BackLink() {
    return (
        <h3>
         <Link to="/countries">Go Back</Link>
        </h3>
    )
}

export default BackLink
