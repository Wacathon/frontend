import React, { useState } from "react";
import logo from "../img/app_logo.svg";
import Navigation from "./Navigation";

function Navbar() {
	const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);
	const [currentScrollY, setCurrentScrollY] = useState(0);

	const preventScroll = () => {
		const newScrollY = window.scrollY;
		const body = document.body;
		body.classList.add("scroll-lock");
		body.style.top = `-${newScrollY}px`;
		setCurrentScrollY(newScrollY);
	};

	const allowScroll = () => {
		const body = document.body;
		body.classList.remove("scroll-lock");
		window.scrollTo({
			top: currentScrollY,
			behavior: "instant",
		});
		setCurrentScrollY(0);
	};

	const toggleSideMenu = () => {
		const backdrop = document.querySelector(".nav-backdrop");
		const sideMenu = document.querySelector(".nav-side-menu");

		if (isSideMenuOpened) {
			backdrop.classList.remove("backdrop-show");
			sideMenu.classList.remove("side-menu-animation");
			allowScroll();
			setIsSideMenuOpened(false);
		} else {
			backdrop.classList.add("backdrop-show");
			sideMenu.classList.add("side-menu-animation");
			preventScroll();
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
				<Navigation toggleSideMenu={toggleSideMenu} />
			</div>
		</nav>
	);
}
export default Navbar;
