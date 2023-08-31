import React, { useState } from "react";
import HexChart from "../charts/HexChart";
import { Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";

function UserCard() {
	const [userId, setUserId] = useState(3);
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
							<UserInfo />
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
