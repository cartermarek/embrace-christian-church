import React from 'react'
import {Routes, Route, NavLink, useRouteMatch} from 'react-router-dom'
import Pastor from '../pages/Pastor'
import Church from '../pages/Church'

function About() {

    return (
        <div className='aboutContainer'>
            <div className="aboutNav">
                <ul>
                    <li>
                        <NavLink to='/about/pastor'>Pastor Smith</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about/church'>Church Vision</NavLink>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path='/about/pastor' element={<Pastor />} />
                <Route path='/about/church' element={<Church />} />
            </Routes>
        </div>
    )
}

export default About
