import React, { useState } from "react";
import HexChart from "../charts/HexChart";
import UserCardInfo from "./UserCardInfo";
import { testUserInfo } from "../../testData";

import "./namecard.css";

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
					<div>
						<UserCardInfo />
					</div>
					<div className="user-card-chart">
						<HexChart userId={userId} />
					</div>
				</div>
				<div className="card-back">
					<div>
						<UserCardInfo />
					</div>
					<div className="user-card-chart">
						<HexChart userId={userId} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserCard;
