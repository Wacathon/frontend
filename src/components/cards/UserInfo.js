import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { getUserProfile } from "../hooks/useAxiosUsers";

function UserInfo() {
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		getUserProfile().then((data) =>
			setUserInfo({
				name: data.name,
				introduce: data.introduce,
				email: data.email,
				phoneNum: data.phoneNum,
			})
		);
	}, []);

	return (
		<Stack className="max-width-200">
			<h5>{userInfo.introduce}</h5>
			<h1>{userInfo.name}</h1>
			<h6>Phone: {userInfo.phoneNum}</h6>
			<h6>Email: {userInfo.email}</h6>
		</Stack>
	);
}

export default UserInfo;
