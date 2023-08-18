import React, { useState } from "react";
import { userInfo } from "../cards/UserInfo";
import { Button, Stack } from "react-bootstrap";
import Inputs from "../forms/Inputs";

function MyInfoForm() {
	const [isEdit, setIsEdit] = useState(false);

	const onEditClick = () => {
		setIsEdit((prev) => !prev);
	};

	return (
		<Stack gap={4} className="userForm-container">
			{isEdit ? (
				<>
					<Inputs />
				</>
			) : (
				<>
					<h5>이름: {userInfo.name}</h5>
					<h5>소개: {userInfo.intro}</h5>
					<h5>연락처: {userInfo.tel}</h5>
					<h5>이메일: {userInfo.email}</h5>
				</>
			)}
			<div className="d-flex justify-content-end">
				<Button onClick={onEditClick}>수정</Button>
			</div>
		</Stack>
	);
}

export default MyInfoForm;
