import React, { useState } from "react";
import Inputs from "../hooks/useInputs";
import { Button, Stack } from "react-bootstrap";
import { userLogin } from "../hooks/useAxiosUsers";
import { useNavigate } from "react-router-dom";

function UserLogin() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [passwd, setPasswd] = useState("");

	const onLoginClick = async (e) => {
		e.preventDefault();
		if (email === "" || passwd === "") {
			alert("이메일 / 비밀번호를 올바르게 입력해주세요!");
			return;
		}
		await userLogin(email, passwd, navigate);
		setEmail("");
		setPasswd("");
	};

	return (
		<Stack gap={3}>
			<Inputs
				inputName="이메일"
				inputType="email"
				inputValue={email}
				setInputValue={setEmail}
				inputPlaceholder="이메일을 입력해주세요."
			/>
			<Inputs
				inputName="비밀번호"
				inputType="password"
				inputValue={passwd}
				setInputValue={setPasswd}
				inputPlaceholder="비밀번호를 입력해주세요."
			/>
			<Button onClick={onLoginClick}>로그인</Button>
		</Stack>
	);
}

export default UserLogin;
