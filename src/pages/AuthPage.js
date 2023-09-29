import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserLogin from "../components/auths/UserLogin";
import UserSignup from "../components/auths/UserSignup";

import logo from "../img/app_logo.png";
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
			<div className="wrapper">
				<div className="d-flex justify-content-center align-items-center">
					<img
						alt="app_icon"
						src={logo}
						width="50"
						height="50"
						className="d-inline-block me-1"
					/>
					<h1 className="m-0">IM</h1>
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
