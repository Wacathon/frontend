import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

import logo from "../img/app_logo.svg";

function Navbar() {
	const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);
	const [currentScrollY, setCurrentScrollY] = useState(0);

	const navigate = useNavigate();

	const preventScroll = () => {
		const newScrollY = window.scrollY;
		document.body.classList.add("scroll-lock");
		document.body.style.top = `-${newScrollY}px`;
		setCurrentScrollY(newScrollY);
	};

	const allowScroll = () => {
		document.body.classList.remove("scroll-lock");
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

	const gotoMyPage = () => {
		navigate("/my-page");
		window.scrollTo({
			top: 0,
			behavior: "instant",
		});
	};

	return (
		<nav className="nav-navbar">
			<div className="navbar-container">
				<button
					className="navbar-menu-btn navbar-blank"
					onClick={toggleSideMenu}
				></button>
				<a href="/" className="navbar-logo">
					<img alt="app_icon" className="nav-logo-img" src={logo} />
					<span>IM</span>
				</a>
				<button
					className="navbar-my-page-btn navbar-blank"
					onClick={gotoMyPage}
				></button>
			</div>
			<div className="nav-backdrop" role="presentation"></div>
			<div className="nav-side-menu">
				<Navigation toggleSideMenu={toggleSideMenu} />
			</div>
		</nav>
	);
}
export default Navbar;
