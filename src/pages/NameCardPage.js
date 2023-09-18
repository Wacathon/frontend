import React, { useState, useEffect } from "react";
import UserCard from "../components/namecards/UserCard";
import PinnedFeedbackList from "../components/feedbacks/PinnedFeedbackList";

import "../components/namecards/cards.css";
import { getUserProfile } from "../hooks/useAxiosAuth";
import { testUserInfo } from "../testData";

function NameCardPage() {
	const [userName, setUserName] = useState("");

	useEffect(() => {
		// axios
		// getUserProfile()
		// 	.then((res) => {
		// 		setUserName(res.name);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		// test data
		setUserName(testUserInfo.name);
	}, []);

	return (
		<div className="wrapper">
			<div className="d-flex flex-column justify-content-center align-items-center p-2">
				<div className="d-flex flex-column align-items-start">
					<h4 className="cardPage-user-card-title ps-2">
						📇 {userName}님의 명함
					</h4>
					<div>
						<UserCard />
					</div>
				</div>
			</div>
			<div className="mt-3 p-2">
				<h4 className="cardPage-user-card-title">📌 Pinned Feedbacks</h4>
				<PinnedFeedbackList />
			</div>
		</div>
	);
}

export default NameCardPage;
