import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./mainpage.css";
import logo from "../components/img/app_logo.png";
import { Button } from "react-bootstrap";

function MainPage() {
	const navigate = useNavigate();
	const [userId, setUserId] = useState(3);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			setIsLoggedIn(true);
		}
	}, []);

	const gotoMainPage = () => {
		navigate(`/name-card/${userId}`);
	};

	const gotoAuthPage = () => {
		navigate("/login");
	};

	return (
		<div className="wrapper">
			<div>
				<div className="d-flex flex-column justify-content-center align-items-center p-2">
					<img alt="app_icon" src={logo} width="250" height="250" />
					<h3 className="main-title">피드백으로 만들어가는 나만의 명함, IM</h3>
				</div>
				<div className="d-flex flex-column mainPage-intro">
					<h4>IM은?</h4>
					<h6>
						사용자의 평가와 피드백을 통해 개인의 능력과 특성을 객관적으로
						표현하는 온라인 명함 서비스
					</h6>
					<span>나를 소개한다는 의미의 I am</span>
					<span>타인이 나를 임명한다는 의미의 I(임)M(명)</span>
				</div>
				<div className="d-flex justify-content-center mt-3">
					{isLoggedIn ? (
						<Button onClick={gotoMainPage}>내 명함 보러가기 👉</Button>
					) : (
						<Button onClick={gotoAuthPage}>
							로그인하고 나만의 명함 만들기 👉
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}

export default MainPage;
