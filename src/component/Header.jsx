import React from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import '../css/Header.css'

function Header() {
    return (
        <div className='headerContainer'>
            <div className='headerTitle'>
                <ul>
                    <li className='navbarLogo'>
                        <NavLink to='/home'>
                            <div className='navbarImage'>

                            </div>
                        </NavLink>           
                    </li>
                    <li>
                        <NavLink className='navlink' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='navlink' to='/events'>Events</NavLink>
                    </li>
                    <li>
                        <NavLink className='navlink' to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className='navlink' to='/giving'>Giving</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
