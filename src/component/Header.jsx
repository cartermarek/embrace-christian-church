import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import "../css/Header.css";
import Fade from "react-reveal/Fade";

function Header() {
	return (
		<div className="headerContainer">
			<div className="headerTitle">
				<ul>
					<li className="navbarLogo">
						<NavLink to="/">
							<div className="navbarImage"></div>
						</NavLink>
					</li>
					<li>
						<NavLink className="navlink" to="/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink className="navlink" to="/events">
							Events
						</NavLink>
					</li>
					<li>
						<NavLink className="navlink" to="/contact">
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink className="navlink" to="/giving">
							Giving
						</NavLink>
					</li>
					{/* only show on mobile mode */}
				</ul>
			</div>
			<button id="mobileLink">
				<nav id="sidebar-menu">
					<h3>Close</h3>
					<ul>
						<li>
							<NavLink className="mobileNavlink" to="/home">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className="mobileNavlink" to="/about">
								About
							</NavLink>
						</li>
						<li>
							<NavLink className="mobileNavlink" to="/events">
								Events
							</NavLink>
						</li>
						<li>
							<NavLink className="mobileNavlink" to="/contact">
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink className="mobileNavlink" to="/giving">
								Giving
							</NavLink>
						</li>
					</ul>
				</nav>
			</button>
		</div>
	);
}

export default Header;
