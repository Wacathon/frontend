import React, { useState } from "react";
import HexChart from "../charts/HexChart";
import UserCardInfo from "./UserCardInfo";
import { testUserInfo } from "../../testData";

import "./namecard.css";
import { Row, Col } from "react-bootstrap";

function UserCard() {
	const [userId, setUserId] = useState(testUserInfo.memberId);
	const [isFlipped, setIsFlipped] = useState(false);

	const onFlipNameCard = () => {
		setIsFlipped((prev) => !prev);
		const card_div = document.querySelector(".user-card-container");
		if (!isFlipped) {
			card_div.classList.add("card-flip");
		} else {
			card_div.classList.remove("card-flip");
		}
	};

	return (
		<div className="user-card-flip-container" onClick={onFlipNameCard}>
			<div className="user-card-container">
				<div className="card-front">
					<Row>
						<Col className="d-flex justify-content-center align-items-center">
							<UserCardInfo />
						</Col>
						<Col className="d-flex justify-content-center align-items-center">
							<HexChart userId={userId} />
						</Col>
					</Row>
				</div>
				<div className="card-back">
					<Row>
						<Col className="d-flex justify-content-center align-items-center">
							<h5>뒷면에 들어갈 정보</h5>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
