import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserLogin from "../components/auths/UserLogin";
import UserSignup from "../components/auths/UserSignup";

import logo from "../img/app_logo.png";
import authImg from "../img/app_auth_page_img.png";
import "../components/auths/auth.css";

function AuthPage() {
	const [isLoginForm, setIsLoginForm] = useState(true);
	const signMethod = useParams().signMethod;
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoginForm(signMethod === "sign-in" ? true : false);
	}, []);

	const onLoginFormClick = () => {
		navigate("/auth/sign-in", { replace: true });
		setIsLoginForm(true);
	};

	const onSignupFormClick = () => {
		navigate("/auth/sign-up", { replace: true });
		setIsLoginForm(false);
	};

	return (
		<div className="auth-container">
			<div className="auth-0">
				<div className="auth-0-0">
					<div className="auth-logo-container">
						<img alt="app_icon" src={logo} className="auth-logo" />
					</div>
					<span className="auth-logo-text">IM</span>
				</div>
				<div className="auth-0-1">
					<span className="auth-introduce-text">
						반갑습니다,
						<br />
						개쩌는 명함 서비스 IM 입니다.
					</span>
				</div>
			</div>
			<div className="auth-1">
				<div className="auth-img-container">
					<img alt="app_auth_page_img" src={authImg} className="auth-img" />
				</div>
				<div className="auth-box">
					<div className="auth-box-toggle-container">
						<div
							className={`auth-box-toggle auth-box-sign-in auth-toggle-${
								signMethod === "sign-in"
							}`}
							onClick={onLoginFormClick}
						>
							<span>로그인</span>
						</div>
						<div
							className={`auth-box-toggle auth-box-sign-up auth-toggle-${
								signMethod === "sign-up"
							}`}
							onClick={onSignupFormClick}
						>
							<span>회원가입</span>
						</div>
					</div>
					<div className="auth-box-sign-form">
						{isLoginForm ? <UserLogin /> : <UserSignup />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthPage;
