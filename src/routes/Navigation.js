import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserProfile, userLogout } from "../hooks/useAxiosAuth";
import { testUserInfo } from "../testData";

import "./route.css";
import logo from "../img/app_logo.svg";

function Navigation({ toggleSideMenu }) {
	const [userInfo, setUserInfo] = useState({});
	const [isDropdownOpened, setIsDropdownOpened] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		// axios
		// getUserProfile().then((data) => {
		// 	setUserInfo({
		// 		id: data.memberId,
		// 		name: data.name,
		// 		email: data.email || "no@email.com",
		// 	});
		// });

		// test data
		setUserInfo({
			id: testUserInfo.memberId,
			name: testUserInfo.name,
			email: testUserInfo.email,
		});

		if (location.pathname !== "/") {
			setIsDropdownOpened(true);
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

	const gotoPage = (pageName) => {
		changeMenuColor(pageName);
		toggleSideMenu && toggleSideMenu();
		navigate(`/${pageName}`);
		window.scrollTo({
			top: 0,
			behavior: "instant",
		});
	};

	const onOpenMenu = () => {
		setIsDropdownOpened((prev) => !prev);
		const svg = document.querySelector(".nav-dropdown-menu svg");
		const menuHeight = document.querySelector(".nav-menu-list-0");
		const menuList = document.querySelector(".nav-menu-list-1");

		if (!isDropdownOpened) {
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
				<div className="nav-header">
					<a href="/" className="nav-logo-0">
						<img alt="app_icon" className="nav-logo-img" src={logo} />
						<span>IM</span>
					</a>
					{toggleSideMenu && (
						<button className="nav-close-btn" onClick={toggleSideMenu}>
							X
						</button>
					)}
				</div>
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
								<li id="name-card" onClick={() => gotoPage("name-card")}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										viewBox="0 0 25 25"
										fill="none"
									>
										<rect
											x="2.90234"
											y="6.5"
											width="19.2"
											height="12.6"
											rx="2"
											fill="#00004D"
										/>
										<rect
											x="2.90234"
											y="10.1006"
											width="19.2"
											height="1.2"
											fill="white"
										/>
										<rect
											x="14.9023"
											y="16.1006"
											width="5.4"
											height="1.2"
											rx="0.6"
											fill="white"
										/>
									</svg>
									<span>Card</span>
								</li>
								<li id="my-page" onClick={() => gotoPage("my-page")}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										viewBox="0 0 25 25"
										fill="none"
									>
										<circle cx="12.5012" cy="7.69941" r="4.8" fill="#00004D" />
										<path
											d="M4.09766 22.7003V22.7003C4.09766 19.9746 5.44276 17.4244 7.69233 15.8852L7.95467 15.7057C9.29278 14.7902 10.8763 14.3003 12.4977 14.3003V14.3003C14.119 14.3003 15.7025 14.7902 17.0406 15.7057L17.303 15.8852C19.5526 17.4244 20.8977 19.9746 20.8977 22.7003V22.7003"
											stroke="#00004D"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M10.8885 19.7917L11.916 16.5298C11.9964 16.2743 12.2333 16.1006 12.5012 16.1006C12.769 16.1006 13.0059 16.2743 13.0864 16.5298L14.1139 19.7917C14.2285 20.1556 14.126 20.5531 13.8497 20.8163L13.1908 21.4438C12.8046 21.8116 12.1977 21.8116 11.8115 21.4438L11.1526 20.8163C10.8763 20.5531 10.7738 20.1556 10.8885 19.7917Z"
											fill="#00004D"
										/>
									</svg>
									<span>My Page</span>
								</li>
								<li id="my-chart" onClick={() => gotoPage("my-chart")}>
									📊
									<span>My chart</span>
								</li>
								<li id="my-feedback" onClick={() => gotoPage("my-feedback")}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										viewBox="0 0 25 25"
										fill="none"
									>
										<path
											d="M9.95117 8.74941C9.95117 8.41804 10.2198 8.14941 10.5512 8.14941H20.1512C20.4825 8.14941 20.7512 8.41804 20.7512 8.74941C20.7512 9.08078 20.4825 9.34941 20.1512 9.34941H10.5512C10.2198 9.34941 9.95117 9.08078 9.95117 8.74941Z"
											fill="#D9D9D9"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10.5512 8.14941C10.2198 8.14941 9.95117 8.41804 9.95117 8.74941C9.95117 9.08078 10.2198 9.34941 10.5512 9.34941H20.1512C20.4825 9.34941 20.7512 9.08078 20.7512 8.74941C20.7512 8.41804 20.4825 8.14941 20.1512 8.14941H10.5512Z"
											fill="#00004D"
										/>
										<path
											d="M9.95117 12.9506C9.95117 12.6192 10.2198 12.3506 10.5512 12.3506H20.1512C20.4825 12.3506 20.7512 12.6192 20.7512 12.9506C20.7512 13.282 20.4825 13.5506 20.1512 13.5506H10.5512C10.2198 13.5506 9.95117 13.282 9.95117 12.9506Z"
											fill="#D9D9D9"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10.5512 12.3506C10.2198 12.3506 9.95117 12.6192 9.95117 12.9506C9.95117 13.282 10.2198 13.5506 10.5512 13.5506H20.1512C20.4825 13.5506 20.7512 13.282 20.7512 12.9506C20.7512 12.6192 20.4825 12.3506 20.1512 12.3506H10.5512Z"
											fill="#00004D"
										/>
										<path
											d="M9.95117 17.1503C9.95117 16.8189 10.2198 16.5503 10.5512 16.5503H20.1512C20.4825 16.5503 20.7512 16.8189 20.7512 17.1503C20.7512 17.4817 20.4825 17.7503 20.1512 17.7503H10.5512C10.2198 17.7503 9.95117 17.4817 9.95117 17.1503Z"
											fill="#D9D9D9"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10.5512 16.5503C10.2198 16.5503 9.95117 16.8189 9.95117 17.1503C9.95117 17.4817 10.2198 17.7503 10.5512 17.7503H20.1512C20.4825 17.7503 20.7512 17.4817 20.7512 17.1503C20.7512 16.8189 20.4825 16.5503 20.1512 16.5503H10.5512Z"
											fill="#00004D"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M8.76821 6.6318C8.94395 6.80754 8.94395 7.09246 8.76821 7.2682L6.23279 9.80361C5.7962 10.2402 5.07897 10.2077 4.6837 9.73335L3.60431 8.43808C3.44521 8.24716 3.471 7.9634 3.66193 7.8043C3.85285 7.6452 4.13661 7.67099 4.29571 7.86192L5.3751 9.15718C5.43156 9.22494 5.53403 9.22959 5.5964 9.16722L8.13181 6.6318C8.30755 6.45607 8.59247 6.45607 8.76821 6.6318Z"
											fill="#00004D"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M8.76821 10.8315C8.94395 11.0072 8.94395 11.2922 8.76821 11.4679L6.23279 14.0033C5.7962 14.4399 5.07897 14.4074 4.6837 13.9331L3.60431 12.6378C3.44521 12.4469 3.471 12.1631 3.66193 12.004C3.85285 11.8449 4.13661 11.8707 4.29571 12.0616L5.3751 13.3569C5.43156 13.4246 5.53403 13.4293 5.5964 13.3669L8.13181 10.8315C8.30755 10.6558 8.59247 10.6558 8.76821 10.8315Z"
											fill="#00004D"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M8.76821 15.0312C8.94395 15.207 8.94395 15.4919 8.76821 15.6676L6.23279 18.203C5.7962 18.6396 5.07897 18.6071 4.6837 18.1328L3.60431 16.8375C3.44521 16.6466 3.471 16.3628 3.66193 16.2037C3.85285 16.0446 4.13661 16.0704 4.29571 16.2613L5.3751 17.5566C5.43156 17.6244 5.53403 17.629 5.5964 17.5666L8.13181 15.0312C8.30755 14.8555 8.59247 14.8555 8.76821 15.0312Z"
											fill="#00004D"
										/>
									</svg>
									<span>Feedback</span>
								</li>
								<li id="share-link" onClick={() => gotoPage("share-link")}>
									🔗
									<span>Share Link</span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="nav-user-info-0">
					<div className="nav-user-info-1" onClick={() => gotoPage("my-page")}>
						<div className="nav-user-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
							>
								<circle cx="18" cy="18" r="18" fill="#C7C3C3" />
								<path
									d="M14.9989 20.0675H21.0012C21.7259 20.0675 22.09 19.7209 22.09 19.0345V14.9655C22.09 14.2791 21.7259 13.9325 21.0012 13.9325H14.9989C14.2776 13.9325 13.91 14.2757 13.91 14.9655V19.0345C13.91 19.7243 14.2776 20.0675 14.9989 20.0675ZM16.5107 17.0816C16.0391 17.0816 15.6542 16.7118 15.6542 16.2585C15.6542 15.8087 16.0391 15.4354 16.5107 15.4354C16.9788 15.4354 17.3637 15.8087 17.3637 16.2585C17.3637 16.7118 16.9788 17.0816 16.5107 17.0816ZM15.0058 19.531C14.6729 19.531 14.4683 19.3377 14.4683 19.0111V18.8079L15.5328 17.9148C15.6854 17.7848 15.8519 17.7181 16.0079 17.7181C16.1744 17.7181 16.3512 17.7848 16.5038 17.9214L17.1695 18.4946L18.8236 17.0816C18.997 16.935 19.1877 16.8684 19.3819 16.8684C19.5726 16.8684 19.7702 16.9383 19.9367 17.085L21.5317 18.5046V19.0178C21.5317 19.3377 21.3237 19.531 20.9943 19.531H15.0058Z"
									fill="#757575"
								/>
							</svg>
						</div>
						<div className="nav-user-info">
							<span id="name">{userInfo.name}</span>
						</div>
					</div>
					<button id="logout-btn" className="primary-btn" onClick={userLogout}>
						로그아웃
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
