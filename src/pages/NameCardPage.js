import React, { useState, useEffect } from "react";
import { getUserProfile } from "../hooks/useAxiosAuth";
import { testUserInfo } from "../testData";
import UserCard from "../components/namecards/UserCard";
import PinnedFeedbackList from "../components/feedbacks/PinnedFeedbackList";

import "./namecardpage.css";

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
			<div className="namecard-0">
				<div className="namecard-card">
					<span className="namecard-card-title">
						<span className="namecard-card-title-name">{userName}</span>님의
						명함이에요.
					</span>
					<div>
						<UserCard />
					</div>
				</div>
				<div>
					<PinnedFeedbackList />
				</div>
			</div>
		</div>
	);
}

export default NameCardPage;
