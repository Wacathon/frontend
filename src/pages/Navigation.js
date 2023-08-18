import React from "react";
import { Stack, Row, Col, Nav, Navbar } from "react-bootstrap";
import logo from "../components/img/js_icon.png";
import "./Navigation.css";

function Navigation() {
	const onClick = (e) => {
		console.log("click ", e);
	};

	return (
		<div className="nav-wrapper">
			<div className="mt-3 mb-3">
				<Nav.Link href="/" className="d-flex align-items-center">
					<img
						alt="app_icon"
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top me-2"
					/>
					개쩌는 명함
				</Nav.Link>
			</div>
			<div>
				<Nav
					defaultActiveKey="/home"
					className="flex-column nav-link-container"
				>
					<Nav.Link href="/card">Card</Nav.Link>
					<Nav.Link href="/mypage">MyPage</Nav.Link>
					<Nav.Link href="/setting">Settings</Nav.Link>
				</Nav>
			</div>
		</div>
	);
}

export default Navigation;
