import React, { useState } from "react";
import Inputs from "../../hooks/useInputs";
import { userSignup } from "../../hooks/useAxiosAuth";
import { useNavigate } from "react-router-dom";

function UserSignup() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [passwd, setPasswd] = useState("");
	const [name, setName] = useState("");
	const [phoneNum, setPhoneNum] = useState("");

	const onSignupClick = async (e) => {
		e.preventDefault();
		if (email === "" || passwd === "" || name === "" || phoneNum === "") {
			alert("회원가입 정보를 올바르게 입력해주세요!");
			return;
		}

		setEmail("");
		setPasswd("");
		setName("");
		setPhoneNum("");

		userSignup(email, name, passwd, phoneNum, navigate);
	};

	return (
		<div>
			<div className="auth-sign-form-input">
				<Inputs
					inputName="이메일"
					inputType="email"
					inputValue={email}
					setInputValue={setEmail}
					inputPlaceholder="이메일을 입력해주세요."
				/>
			</div>
			<div className="auth-sign-form-input">
				<Inputs
					inputName="비밀번호"
					inputType="password"
					inputValue={passwd}
					setInputValue={setPasswd}
					inputPlaceholder="비밀번호를 입력해주세요."
				/>
			</div>
			<div className="auth-sign-form-input">
				<Inputs
					inputName="이름"
					inputValue={name}
					setInputValue={setName}
					inputPlaceholder="이름을 입력해주세요."
				/>
			</div>
			<div className="auth-sign-form-input">
				<Inputs
					inputName="전화번호"
					inputValue={phoneNum}
					setInputValue={setPhoneNum}
					inputPlaceholder="전화번호를 입력해주세요."
				/>
			</div>
			<button className="auth-sign-btn" onClick={onSignupClick}>
				회원가입
			</button>
		</div>
	);
}

export default UserSignup;
