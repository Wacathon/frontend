import React from "react";
import { userInfo } from "../cards/UserInfo";
import { Button, Stack } from "react-bootstrap";

function MyInfoForm() {
	return (
		<Stack gap={4} className="userForm-container">
			<h5>이름: {userInfo.name}</h5>
			<h5>소개: {userInfo.intro}</h5>
			<h5>연락처: {userInfo.tel}</h5>
			<h5>이메일: {userInfo.email}</h5>
			<div className="d-flex justify-content-end">
				<Button>수정</Button>
			</div>
		</Stack>
	);
}

export default MyInfoForm;
