import React from "react";
import HexChart from "../charts/HexChart";
import { Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";

function UserCard() {
	return (
		<div className="user-card-container">
			<Row>
				<Col className="d-flex justify-content-center align-items-center">
					<UserInfo />
				</Col>
				<Col className="d-flex justify-content-center align-items-center">
					<HexChart />
				</Col>
			</Row>
		</div>
	);
}

export default UserCard;
