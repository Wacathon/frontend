import React, { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { getUserProfile } from "../../hooks/useAxiosAuth";
import { testUserCardInfo } from "../../testData";

function UserCardInfo() {
	const [cardInfo, setCardInfo] = useState({});

	useEffect(() => {
		// axios
		// getUserProfile().then((data) =>
		// 	setCardInfo({
		// 		name: data.name,
		// 		introduce: data.introduce,
		// 		email: data.email,
		// 		phoneNum: data.phoneNum,
		// 	})
		// );

		// test data
		setCardInfo({
			name: testUserCardInfo.name,
			engName: testUserCardInfo.engName,
			email: testUserCardInfo.email,
			phoneNum: testUserCardInfo.phoneNum,
			introduce: testUserCardInfo.introduce,
			social: testUserCardInfo.social,
			mbti: testUserCardInfo.mbti,
			isPublicEmail: testUserCardInfo.isPublicEmail,
			isPublicPhone: testUserCardInfo.isPublicPhone,
			isPublicIntroduce: testUserCardInfo.isPublicIntroduce,
		});
	}, []);

	return (
		<Stack className="max-width-200">
			<h5>{cardInfo.introduce}</h5>
			<h1>{cardInfo.name}</h1>
			<h6>Phone: {cardInfo.phoneNum}</h6>
			<h6>Email: {cardInfo.email}</h6>
		</Stack>
	);
}

export default UserCardInfo;
