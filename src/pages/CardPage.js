import React from "react";
import UserCard from "../components/cards/UserCard";
import { userInfo } from "../components/cards/UserInfo";

import { Container } from "react-bootstrap";
import "../components/cards/cards.css";
import Feedback from "../components/feedbacks/Feedback";

function CardPage() {
	return (
		<Container fluid className="cardPage-wrapper">
			<div className="d-flex flex-column justify-content-center align-items-center">
				<h4>🧑‍💻 {userInfo.name}님의 명함</h4>
				<UserCard />
			</div>
			<div className="mt-4">
				<h4>📌 Pinned Feedbacks</h4>
				<Feedback />
			</div>
		</Container>
	);
}

export default CardPage;
