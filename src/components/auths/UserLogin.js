import React, { useState } from "react";
import { userLogin } from "../../hooks/useAxiosAuth";
import Inputs from "../../hooks/useInputs";
import { Button, Stack } from "react-bootstrap";

function UserLogin() {
	const [email, setEmail] = useState("");
	const [passwd, setPasswd] = useState("");

	const onLoginClick = async (e) => {
		e.preventDefault();
		if (email === "" || passwd === "") {
			alert("이메일 / 비밀번호를 올바르게 입력해주세요!");
			return;
		}
		userLogin(email, passwd).then((res) => {
			setEmail("");
			setPasswd("");
			if (res) {
				window.location.replace(process.env.REACT_APP_BASE_URL);
			}
		});
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
