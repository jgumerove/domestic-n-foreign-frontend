import React from 'react'
import { Link } from 'react-router-dom'


function About() {
    return (
        <div>
            <h2>About Us</h2><br/>
            <h3><Link to="/countries">Go Back</Link></h3>
        </div>
    )
}

export default About
