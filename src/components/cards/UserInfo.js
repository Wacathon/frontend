import React from "react";
import { Stack } from "react-bootstrap";

export const userInfo = {
	name: "김가천",
	intro: "현명한 관리자",
	email: "kimgachon@ac.gachon.kr",
	tel: "010-1234-5678",
};

function UserInfo() {
	return (
		<Stack className="max-width-200">
			<h5>{userInfo.intro}</h5>
			<h1>{userInfo.name}</h1>
			<h6>Phone: {userInfo.tel}</h6>
			<h6>Email: {userInfo.email}</h6>
		</Stack>
	);
}

export default UserInfo;
