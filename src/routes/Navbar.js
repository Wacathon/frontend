import React, { useState } from "react";
import logo from "../img/app_logo.svg";

function Navbar() {
	const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

	const toggleSideMenu = () => {
		const backdrop = document.querySelector(".nav-backdrop");
		const sideMenu = document.querySelector(".nav-side-menu");
		if (isSideMenuOpened) {
			backdrop.classList.remove("backdrop-show");
			sideMenu.classList.remove("side-menu-animation");
			setIsSideMenuOpened(false);
		} else {
			backdrop.classList.add("backdrop-show");
			sideMenu.classList.add("side-menu-animation");
			setIsSideMenuOpened(true);
		}
	};

	return (
		<nav className="nav-navbar">
			<div className="navbar-container">
				<button
					className="navbar-menu-btn navbar-blank"
					onClick={toggleSideMenu}
				></button>
				<div className="navbar-logo">
					<div>
						<img alt="app_logo" src={logo} />
					</div>
					<span>IM</span>
				</div>
				<button className="navbar-blank"></button>
			</div>
			<div className="nav-backdrop" role="presentation"></div>
			<div className="nav-side-menu">
				<h2>Side Menu</h2>
				<button onClick={toggleSideMenu}>X</button>
			</div>
		</nav>
	);
}
export default Navbar;
