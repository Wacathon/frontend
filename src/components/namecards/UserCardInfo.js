import React, { useEffect, useState } from "react";
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
		<div className="user-card-info-0">
			<hr className="user-card-info-line" />
			<div className="user-card-info-introduce">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
				>
					<circle cx="16" cy="16" r="16" fill="#D9D9D9" />
				</svg>
				<span id="introduce-text">{cardInfo.introduce}</span>
			</div>
			<hr className="user-card-info-line" />
			<div className="user-card-info-name">
				<span id="kor-name">{cardInfo.name}</span>
				<span id="eng-name">{cardInfo.engName}</span>
			</div>
			<hr className="user-card-info-line" />
			<div className="user-card-info-details">
				<div>
					<span id="detail-title">Phone</span>
					<span id="detail-content">{cardInfo.phoneNum}</span>
				</div>
				<div>
					<span id="detail-title">Email</span>
					<span id="detail-content">{cardInfo.email}</span>
				</div>
				<div>
					<span id="detail-title">Social</span>
					<span id="detail-content">{cardInfo.social}</span>
				</div>
				<div>
					<span id="detail-title">MBTI</span>
					<span id="detail-content">{cardInfo.mbti}</span>
				</div>
			</div>
		</div>
	);
}

export default UserCardInfo;
