import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../components/cards/UserInfo";

import logo from "../components/img/js_icon.png";
import { UserOutlined } from "@ant-design/icons";
import "./Navigation.css";

function Navigation() {
	const navigate = useNavigate();

	const gotoCardPage = () => {
		navigate("/");
	};

	const gotoMyPage = () => {
		navigate("/mypage");
	};

	return (
		<div className="nav-wrapper">
			<div className="d-flex flex-column">
				<div className="mt-3 mb-5">
					<Nav.Link
						onClick={gotoCardPage}
						className="d-flex align-items-center"
					>
						<img
							alt="app_icon"
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top me-2"
						/>
						<span className="nav-logo-text">개쩌는 명함</span>
					</Nav.Link>
				</div>
				<div>
					<Nav
						defaultActiveKey="/home"
						className="flex-column nav-link-container"
					>
						<Nav.Item id="nav-link-container">Menu</Nav.Item>
						<Nav.Link onClick={gotoCardPage}>📇 Card</Nav.Link>
						<Nav.Link onClick={gotoMyPage}>🧑‍💻 MyPage</Nav.Link>
					</Nav>
				</div>
				<div className="nav-user-info-container">
					<div className="nav-user-icon">
						<UserOutlined />
					</div>
					<div className="nav-user-info">
						<span id="name">{userInfo.name}</span>
						<span id="email">{userInfo.email}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
