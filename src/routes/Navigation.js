import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserProfile, userLogout } from "../hooks/useAxiosAuth";
import { testUserInfo } from "../testData";

import "./route.css";
import logo from "../img/app_logo.png";

function Navigation() {
	const [userInfo, setUserInfo] = useState({});
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// axios
		// getUserProfile().then((data) => {
		// 	setUserInfo({
		// 		id: data.memberId,
		// 		name: data.name,
		// 		email: data.email,
		// 	});
		// });

		// test data
		setUserInfo({
			id: testUserInfo.memberId,
			name: testUserInfo.name,
			email: testUserInfo.email,
		});

		if (location.pathname !== "/") {
			setIsMenuOpened(true);
			onOpenMenu();
			changeMenuColor(location.pathname.slice(1));
		}
	}, []);

	const changeMenuColor = (menuName) => {
		const li = document.querySelector(".nav-menu-list-1-visited");
		if (li) {
			li.classList.remove("nav-menu-list-1-visited");
		}
		const clickedList = document.querySelector(`.nav-menu-list-1 #${menuName}`);
		clickedList.classList.add("nav-menu-list-1-visited");
	};

	const gotoCardPage = async () => {
		changeMenuColor("name-card");
		navigate("/name-card");
	};

	const gotoMyPage = () => {
		changeMenuColor("profile");
		navigate("/profile");
	};

	const gotoLinkPage = () => {
		changeMenuColor("share-link");
		navigate("/share-link");
	};

	const onOpenMenu = () => {
		setIsMenuOpened((prev) => !prev);
		const svg = document.querySelector(".nav-dropdown-menu svg");
		const menuHeight = document.querySelector(".nav-menu-list-0");
		const menuList = document.querySelector(".nav-menu-list-1");

		if (!isMenuOpened) {
			svg.classList.add("nav-dropdown-animation");
			menuList.classList.add("nav-menu-animation");
			menuHeight.classList.add("nav-menu-height");
		} else {
			svg.classList.remove("nav-dropdown-animation");
			menuList.classList.remove("nav-menu-animation");
			menuHeight.classList.remove("nav-menu-height");
		}
	};

	return (
		<div className="nav-0">
			<div className="nav-1">
				<a href="/" className="nav-logo-0">
					<img alt="app_icon" className="nav-logo-img" src={logo} />
					<span>IM</span>
				</a>
				<div className="nav-dropdown">
					<div className="nav-dropdown-menu" onClick={onOpenMenu}>
						<span>Menu</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 10"
							fill="none"
						>
							<path
								d="M15.1953 2.15235C15.3407 2.007 15.4262 1.8189 15.4262 1.59657C15.4262 1.15191 15.0927 0.818457 14.6481 0.818457C14.4343 0.818457 14.2376 0.903936 14.0923 1.04078L8.00419 7.26567L1.91608 1.04078C1.77073 0.903935 1.56551 0.818456 1.36026 0.818456C0.915638 0.818456 0.573609 1.15191 0.573609 1.59657C0.573609 1.8189 0.659125 2.007 0.804474 2.15235L7.43129 8.92452C7.5681 9.08698 7.78186 9.18103 8.00419 9.18103C8.21794 9.18103 8.41462 9.08698 8.57708 8.92452L15.1953 2.15235Z"
								fill="#363636"
							/>
						</svg>
					</div>
					<div className="nav-menu-list-0">
						<nav className="nav-menu-list-1">
							<ul>
								<li id="name-card" onClick={gotoCardPage}>
									Card
								</li>
								<li id="profile" onClick={gotoMyPage}>
									My Page
								</li>
								<li id="share-link" onClick={gotoLinkPage}>
									Share Link
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="nav-user-info-0">
					<div className="nav-user-info-1">
						<div className="nav-user-icon">👤</div>
						<div className="nav-user-info">
							<span id="name">{userInfo.name}</span>
							{/* <span id="email">{userInfo.email}</span> */}
						</div>
					</div>
					<button id="logout-btn" onClick={userLogout}>
						로그아웃
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
