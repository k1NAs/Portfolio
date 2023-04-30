import React from "react";
import { Link } from "react-router-dom"



import "./header.css";

function Header() {
	return (
		<>
			<header className="header">
				<nav className="navigation">
					<Link to="/" className="navigation-link">Home</Link>
					<Link to="/projects" className="navigation-link">Projects</Link>
					<Link to="/contacts" className="navigation-link">Contacts</Link>
				</nav>
			</header>
		</>
	)
}

export default Header;