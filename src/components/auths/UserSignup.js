import React, { useState } from "react";
import Inputs from "../../hooks/useInputs";
import { userSignup } from "../../hooks/useAxiosAuth";
import { useNavigate } from "react-router-dom";

function UserSignup() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [passwd, setPasswd] = useState("");
	const [passwdCheck, setPasswdCheck] = useState("");
	const [phoneNum, setPhoneNum] = useState("");

	const onPhoneChange = (e) => {
		const {
			target: { value },
		} = e;
		setPhoneNum(value);
	};

	const onSignupClick = async (e) => {
		e.preventDefault();
		if (
			email === "" ||
			passwd === "" ||
			passwdCheck === "" ||
			name === "" ||
			phoneNum === ""
		) {
			alert("회원가입 정보를 올바르게 입력해주세요!");
			return;
		}
		if (passwd !== passwdCheck) {
			alert("입력하신 비밀번호를 다시 확인해주세요.");
			return;
		}

		setName("");
		setEmail("");
		setPasswd("");
		setPasswdCheck("");
		setPhoneNum("");

		userSignup(email, name, passwd, phoneNum, navigate);
	};

	return (
		<div>
			<div className="auth-sign-form-input">
				<Inputs
					inputId="name"
					inputName="이름"
					inputValue={name}
					setInputValue={setName}
					inputPlaceholder="이름을 입력해주세요."
					isRequired={true}
				/>
			</div>
			<div className="auth-sign-form-input">
				<Inputs
					inputId="email"
					inputName="이메일"
					inputType="email"
					inputValue={email}
					setInputValue={setEmail}
					inputPlaceholder="이메일을 입력해주세요."
					inputAutoType="email"
					isRequired={true}
				/>
			</div>
			<div className="auth-sign-form-input">
				<Inputs
					inputId="passwd"
					inputName="비밀번호"
					inputType="password"
					inputValue={passwd}
					setInputValue={setPasswd}
					inputPlaceholder="비밀번호를 입력해주세요."
					isRequired={true}
				/>
			</div>
			<div className="auth-sign-form-input passwdCheck-margin">
				<Inputs
					inputId="passwdCheck"
					inputType="password"
					inputValue={passwdCheck}
					setInputValue={setPasswdCheck}
					inputPlaceholder="비밀번호를 한번 더 입력해주세요."
					isRequired={true}
				/>
			</div>
			<div className="auth-sign-form-input">
				<label htmlFor="phone">전화번호</label>
				<input
					id="phone"
					type="tel"
					placeholder="전화번호를 입력해주세요."
					value={phoneNum}
					required
					autoComplete="tel"
					pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
					onChange={onPhoneChange}
				/>
			</div>
			<div className="auth-sign-form-agreement">
				<label className="auth-agreement-box">
					<input type="checkbox" />
					<span className="auth-agreement-label">전체동의</span>
				</label>
				<hr className="auth-sign-form-line" />
				<label className="auth-agreement-box">
					<input type="checkbox" />
					<span className="auth-agreement-label show-agreement">
						이용약관 동의
					</span>
					<span className="auth-agreement-required-text">
						동의<span id="star-text">*</span>
					</span>
				</label>
				<label className="auth-agreement-box">
					<input type="checkbox" />
					<span className="auth-agreement-label show-agreement">
						개인정보 수집 및 이용 동의
					</span>
					<span className="auth-agreement-required-text">
						동의<span id="star-text">*</span>
					</span>
				</label>
				<label className="auth-agreement-box">
					<input type="checkbox" />
					<span className="auth-agreement-label">
						<span id="optional-agreement">[선택]</span>
						<span className="show-agreement">
							마케팅 활용 동의 및 광고 수신
						</span>
					</span>
					<span className="auth-agreement-required-text">동의</span>
				</label>
			</div>
			<button className="auth-sign-btn primary-btn" onClick={onSignupClick}>
				회원가입
			</button>
		</div>
	);
}

export default UserSignup;
