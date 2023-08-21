import React, { useState, useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import Inputs from "../hooks/useInputs";
import axios from "axios";
import { userInfo } from "../cards/UserInfo";

function MyInfoForm() {
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState("");
	const [intro, setIntro] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");

	const toggleEdit = () => {
		setIsEdit((prev) => !prev);
	};

	const onEditClick = async () => {
		const accessToken = localStorage.getItem("accessToken");
		await axios.post(
			"http://43.202.59.248:8080/api/member/introduce",
			{
				email: email,
				introduce: intro,
				phoneNum: tel,
			},
			{
				headers: {
					"X-AUTH-TOKEN": `Bearer ${accessToken}`,
				},
			}
		);
		alert("정보가 수정되었습니다!");
		setIsEdit(true);
		window.location.reload();
	};

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");

		const headers = {
			"Content-type": "application/json; charset=UTF-8",
			Accept: "*/*",
			"X-AUTH-TOKEN": "Bearer " + accessToken,
		};

		axios
			.get("http://43.202.59.248:8080/api/member/myProfile", { headers })
			.then((res) => {
				const result = res.data.response;
				setName(result.name);
				setIntro(result.introduce);
				setEmail(result.email);
				setTel(result.phoneNum);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="userForm-container">
			<>
				{isEdit ? (
					<div className="p-2">
						<h5>이름 : {name}</h5>
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
					</div>
				) : (
					<Stack gap={3} className="pt-2">
						<h5>이름: {name}</h5>
						<h5>소개: {intro}</h5>
						<h5>연락처: {tel}</h5>
						<h5>이메일: {email}</h5>
					</Stack>
				)}
			</>
			<div className="d-flex justify-content-end">
				{isEdit ? (
					<>
						<Button variant="secondary" className="me-2" onClick={toggleEdit}>
							취소
						</Button>
						<Button onClick={onEditClick}>수정완료</Button>
					</>
				) : (
					<Button onClick={toggleEdit}>수정하기</Button>
				)}
			</div>
		</div>
	);
}

export default MyInfoForm;
