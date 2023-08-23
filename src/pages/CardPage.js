import React, { useState, useEffect } from "react";
import UserCard from "../components/cards/UserCard";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import "../components/cards/cards.css";
import FeedbackCards from "../components/feedbacks/FeedbackCards";
import PinnedFeedbackList from "../components/feedbacks/PinnedFeedbackList";

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
		<Container fluid className="cardPage-wrapper">
			<Row>
				<Col>
					<h4 className="cardPage-user-card-title">📇 {userName}님의 명함</h4>
				</Col>
			</Row>
			<Row>
				<Col className="userCard-max-width">
					<UserCard />
				</Col>
			</Row>
			<div className="mt-5 feedback-container">
				<h4 className="cardPage-user-card-title">📌 Pinned Feedbacks</h4>
				<PinnedFeedbackList />
			</div>
		</Container>
	);
}

export default CardPage;
