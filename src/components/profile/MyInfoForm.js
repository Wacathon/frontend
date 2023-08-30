import React, { useState, useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import Inputs from "../../hooks/useInputs";
import { getUserProfile, updateUserInfo } from "../../hooks/useAxiosAuth";

function MyInfoForm() {
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState("");
	const [introduce, setIntroduce] = useState("");
	const [phoneNum, setPhoneNum] = useState("");
	const [email, setEmail] = useState("");

	const toggleEdit = () => {
		setIsEdit((prev) => !prev);
	};

	const onEditClick = async () => {
		if (email === "" || introduce === "" || phoneNum === "") {
			alert("정보를 입력해주세요!");
			return;
		}
		await updateUserInfo(email, introduce, phoneNum);
		alert("정보가 수정되었습니다!");
		setIsEdit(true);
		window.location.reload();
	};

	useEffect(() => {
		getUserProfile().then((data) => {
			setName(data.name);
			setIntroduce(data.introduce);
			setEmail(data.email);
			setPhoneNum(data.phoneNum);
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
							inputValue={introduce}
							setInputValue={setIntroduce}
							inputPlaceholder="소개를 입력해주세요"
						/>
						<Inputs
							inputName="연락처"
							inputValue={phoneNum}
							setInputValue={setPhoneNum}
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
						<h5>소개: {introduce}</h5>
						<h5>연락처: {phoneNum}</h5>
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
