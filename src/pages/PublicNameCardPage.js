import React, { useState, useEffect } from "react";
import HexChart from "../components/charts/HexChart";
import { useParams } from "react-router-dom";
import { getMyNameCardInfo } from "../hooks/useAxiosIndicator";

import { Row, Col, Stack, Button } from "react-bootstrap";
import "../components/namecards/namecard.css";

function PublicNameCardPage() {
	const userId = useParams();
	const [userInfo, setUserInfo] = useState({});
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
				<h4 className="user-card-title ps-2">
					📇 {userInfo.userName}님의 명함
				</h4>
				<div className="user-card-flip-container" onClick={onFlipNameCard}>
					<div className="user-card-container">
						<div className="card-front">
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
						<div className="card-back">
							<Row>
								<Col className="d-flex justify-content-center align-items-center">
									<h6>뒷면에 들어갈 정보</h6>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-2">
				<Button>명함 저장하기</Button>
			</div>
		</div>
	);
}

export default PublicNameCardPage;
