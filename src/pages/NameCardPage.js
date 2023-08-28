import React, { useState, useEffect } from "react";
import HexChart from "../components/charts/HexChart";
import { useParams } from "react-router-dom";
import { getMyNameCardInfo } from "../hooks/useAxiosIndicator";

import { Row, Col, Stack } from "react-bootstrap";
import "../components/namecards/cards.css";

function NameCardPage() {
	const userId = useParams();
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		getMyNameCardInfo(userId.userId).then((res) => {
			setUserInfo({
				userName: res.userName,
				introduce: res.introduce,
				email: res.email,
				phoneNum: res.phoneNum,
			});
		});
	}, []);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center formPage-wrapper back-white">
			<div>
				<h4 className="cardPage-user-card-title ps-2">
					📇 {userInfo.userName}님의 명함
				</h4>
				<div className="user-card-container">
					<Row>
						<Col className="d-flex justify-content-center align-items-center">
							<Stack className="max-width-200">
								<h5>{userInfo.introduce}</h5>
								<h1>{userInfo.userName}</h1>
								<h6>Phone: {userInfo.phoneNum}</h6>
								<h6>Email: {userInfo.email}</h6>
							</Stack>
						</Col>
						<Col className="d-flex justify-content-center align-items-center">
							<HexChart userId={userId.userId} />
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default NameCardPage;
