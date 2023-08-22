import React, { useState } from "react";
import Inputs from "../hooks/useInputs";
import { Button, Stack } from "react-bootstrap";
import { userSignup } from "../hooks/useAxiosUsers";

function UserSignup() {
	const [email, setEmail] = useState("");
	const [passwd, setPasswd] = useState("");
	const [name, setName] = useState("");
	const [introduce, setIntroduce] = useState("");
	const [phoneNum, setPhoneNum] = useState("");

	const onSignupClick = async (e) => {
		e.preventDefault();
		if (email === "" || passwd === "" || name === "" || phoneNum === "") {
			alert("회원가입 정보를 올바르게 입력해주세요!");
			return;
		}
		await userSignup(email, introduce, name, passwd, phoneNum);
		setEmail("");
		setPasswd("");
		setName("");
		setIntroduce("");
		setPhoneNum("");
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
			<Inputs
				inputName="이름"
				inputValue={name}
				setInputValue={setName}
				inputPlaceholder="이름을 입력해주세요."
			/>
			<Inputs
				inputName="한줄 소개"
				inputValue={introduce}
				setInputValue={setIntroduce}
				inputPlaceholder="한줄 소개를 입력해주세요."
			/>
			<Inputs
				inputName="전화번호"
				inputValue={phoneNum}
				setInputValue={setPhoneNum}
				inputPlaceholder="전화번호를 입력해주세요."
			/>
			<Button onClick={onSignupClick}>회원가입</Button>
		</Stack>
	);
}

export default UserSignup;
