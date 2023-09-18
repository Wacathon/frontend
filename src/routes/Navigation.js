import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUserProfile, userLogout } from "../hooks/useAxiosAuth";
import { testUserInfo } from "../testData";

import "./route.css";
import logo from "../img/app_logo.png";

function Navigation() {
	const [userInfo, setUserInfo] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		// axios
		getUserProfile().then((data) => {
			setUserInfo({
				id: data.memberId,
				name: data.name,
				email: testUserInfo.email,
				// email: data.email,
			});
		});

		// test data
	}, []);

	const gotoMainPage = () => {
		navigate("/");
	};

	const gotoCardPage = () => {
		navigate(`/name-card`);
	};

	const gotoMyPage = () => {
		navigate("/profile");
	};

	const gotoLinkPage = () => {
		navigate("/share-link");
	};

	return (
		<aside className="d-flex flex-column nav-wrapper p-4">
			<div className="mt-3 mb-5">
				<Nav.Link onClick={gotoMainPage} className="d-flex align-items-center">
					<img
						alt="app_icon"
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top me-1"
					/>
					<span className="nav-logo-text">IM</span>
				</Nav.Link>
			</div>
			<div>
				<Nav
					defaultActiveKey="/home"
					className="flex-column nav-link-container"
				>
					<Nav.Item id="nav-link-container">Menu</Nav.Item>
					<Nav.Link onClick={gotoCardPage}>📇 내 명함</Nav.Link>
					<Nav.Link onClick={gotoMyPage}>🧑‍💻 마이페이지</Nav.Link>
					<Nav.Link onClick={gotoLinkPage}>🔗 링크 공유</Nav.Link>
				</Nav>
			</div>
			<div className="nav-user-info-container">
				<div className="nav-user-icon me-1">👤</div>
				<div className="nav-user-info">
					<span id="name">{userInfo.name}</span>
					<span id="email">{userInfo.email}</span>
					<Button onClick={userLogout}>로그아웃</Button>
				</div>
			</div>
		</aside>
	);
}

export default Navigation;
