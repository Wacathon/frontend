import React, { useState } from "react";
import UserLogin from "../components/auths/UserLogin";
import UserSignup from "../components/auths/UserSignup";

import logo from "../components/img/app_logo.png";
import { Container, Row, Col, Form } from "react-bootstrap";

function AuthPage() {
	const [isLoginForm, setIsLoginForm] = useState(true);

	const onAuthToggle = () => {
		setIsLoginForm((prev) => !prev);
	};

	return (
		<Container fluid className="p-4">
			<Row>
				<Col className="d-flex justify-content-center align-items-center">
					<img
						alt="app_icon"
						src={logo}
						width="50"
						height="50"
						className="d-inline-block me-1"
					/>
					<h1 className="m-0">IM</h1>
				</Col>
			</Row>
			<Row className="p-4">
				<h4>{isLoginForm ? "로그인" : "회원가입"}</h4>
				<Form.Switch
					onChange={onAuthToggle}
					label={isLoginForm ? "로그인" : "회원가입"}
				/>
				{isLoginForm ? <UserLogin /> : <UserSignup />}
			</Row>
		</Container>
	);
}

export default AuthPage;
