import React, { useState, useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import Inputs from "../../hooks/useInputs";
import { getUserProfile, updateUserInfo } from "../../hooks/useAxiosAuth";
import { testUserInfo } from "../../testData";

function MyInfoForm() {
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState("");
	const [phoneNum, setPhoneNum] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		// axios
		// getUserProfile().then((data) => {
		// 	setName(data.name);
		// 	setIntroduce(data.introduce);
		// 	setEmail(data.email);
		// 	setPhoneNum(data.phoneNum);
		// });

		// test data
		setName(testUserInfo.name);
		setEmail(testUserInfo.email);
		setPhoneNum(testUserInfo.phoneNum);
	}, []);

	const changePasswd = () => {
		console.log("change pw");
	};

	const toggleEdit = () => {
		setIsEdit((prev) => !prev);
	};

	const onEditClick = async () => {
		// if (name === "" || email === "" || introduce === "" || phoneNum === "") {
		// 	alert("정보를 입력해주세요!");
		// 	return;
		// }
		// updateUserInfo(email, true, true, true, phoneNum).then((res) => {
		// 	if (res) {
		// 		alert("정보가 수정되었습니다!");
		// 		window.location.reload();
		// 	}
		// });
		// setIsEdit(true);

		if (name === "" || email === "" || phoneNum === "") {
			alert("정보를 입력해주세요!");
			return;
		}
		alert("정보가 수정되었습니다!");
		window.location.reload();
		setIsEdit(true);
	};

	return (
		<div className="userForm-container">
			<>
				{isEdit ? (
					<div className="p-2">
						<Stack gap={3}>
							<Inputs
								inputName="이름"
								inputValue={name}
								setInputValue={setName}
								inputPlaceholder="이름을 입력해주세요"
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
						</Stack>
					</div>
				) : (
					<div>
						<Stack gap={3} className="pt-2">
							<h5>이름: {name}</h5>
							<h5>연락처: {phoneNum}</h5>
							<h5>이메일: {email}</h5>
						</Stack>
						<Button onClick={changePasswd}>비밀번호 변경</Button>
					</div>
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
