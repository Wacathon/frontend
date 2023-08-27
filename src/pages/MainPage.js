import React from "react";
import "./mainpage.css";
import logo from "../components/img/app_logo.png";

function MainPage() {
	return (
		<div className="mainPage-wrapper">
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
			</div>
		</div>
	);
}

export default MainPage;
