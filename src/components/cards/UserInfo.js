import React, { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "react-bootstrap";

export const userInfo = {
	name: "강경수",
	intro: "현명한 관리자",
	email: "kscodebase@gmail.com",
	tel: "010-1234-5678",
};

function UserInfo() {
	const [userInfo, setUserInfo] = useState({});
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
				setUserInfo({
					name: result.name,
					intro: result.introduce || "현명한 관리자",
					email: result.email,
					tel: result.phoneNum,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
