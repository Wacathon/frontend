import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/namecards/UserCard";
import PinnedFeedbackList from "../components/feedbacks/PinnedFeedbackList";

import "../components/namecards/cards.css";

function CardPage() {
	const [userName, setUserName] = useState("");
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
				setUserName(result.name);
			})
			.catch((err) => {
				console.log(err);
			});
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

export default CardPage;
