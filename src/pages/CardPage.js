import React from "react";
import UserCard from "../components/cards/UserCard";
import { userInfo } from "../components/cards/UserInfo";

import { Container, Row, Col } from "react-bootstrap";
import "../components/cards/cards.css";
import Feedback from "../components/feedbacks/Feedback";

function CardPage() {
	return (
		<Container fluid className="cardPage-wrapper">
			<Row>
				<Col>
					<h4 className="cardPage-user-card-title">
						📇 {userInfo.name}님의 명함
					</h4>
				</Col>
			</Row>
			<Row>
				<Col className="userCard-max-width">
					<UserCard />
				</Col>
			</Row>
			<div className="mt-4 feedback-container">
				<h4>📌 Pinned Feedbacks</h4>
				<Feedback />
			</div>
		</Container>
	);
}

export default CardPage;
