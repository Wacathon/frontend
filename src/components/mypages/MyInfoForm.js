import React, { useState, useEffect } from "react";
import { userInfo } from "../cards/UserInfo";
import { Button, Stack } from "react-bootstrap";
import Inputs from "../forms/Inputs";
import axios from "axios";

function MyInfoForm() {
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState(userInfo.name);
	const [intro, setIntro] = useState(userInfo.intro);
	const [tel, setTel] = useState(userInfo.tel);
	const [email, setEmail] = useState(userInfo.email);

	const onEditClick = () => {
		// 사용자 개인정보 수정하는 코드
		setIsEdit((prev) => !prev);
	};

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		
		const headers = ({
			'Content-type': 'application/json; charset=UTF-8',
			'Accept': '*/*',
			'X-AUTH-TOKEN': 'Bearer ' + accessToken
		});

		axios.get('http://43.202.59.248:8080/api/member/myProfile', {headers})
		.then((res) => {
			const result = res.data.response;
			setName(result.name);
			setIntro(result.introduce);
			setEmail(result.email);
			setTel(result.phoneNum);
		})
		.catch((err) => {
			console.log(err);
		})
	}, [])

	return (
		<Stack gap={4} className="userForm-container">
			{isEdit ? (
				<>
					<Inputs
						inputName="이름"
						inputValue={name}
						setInputValue={setName}
						inputPlaceholder="이름을 입력해주세요"
					/>
					<Inputs
						inputName="소개"
						inputValue={intro}
						setInputValue={setIntro}
						inputPlaceholder="소개를 입력해주세요"
					/>
					<Inputs
						inputName="연락처"
						inputValue={tel}
						setInputValue={setTel}
						inputPlaceholder="연락처를 입력해주세요"
					/>
					<Inputs
						inputName="이메일"
						inputValue={email}
						setInputValue={setEmail}
						inputPlaceholder="이메일을 입력해주세요"
					/>
				</>
			) : (
				<>
					<h5>이름: {name}</h5>
					<h5>소개: {intro}</h5>
					<h5>연락처: {tel}</h5>
					<h5>이메일: {email}</h5>
				</>
			)}
			<div className="d-flex justify-content-end">
				<Button onClick={onEditClick}>
					{isEdit ? "수정완료" : "수정하기"}
				</Button>
			</div>
		</Stack>
	);
}

export default MyInfoForm;
