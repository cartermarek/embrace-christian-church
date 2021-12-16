import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'

function Footer() {
    return (
        <div className='footerContainer'>
            <div className="footerLinks">
                <ul>
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
            <div className='copyright'>
                <p>Copyright <span></span> Embrace Christian Church</p>
            </div>
        </div>
    )
}

export default Footer
