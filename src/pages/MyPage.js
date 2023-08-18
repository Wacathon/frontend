import React from "react";
import MyInfoForm from "../components/mypages/MyInfoForm";
import MyHexChart from "../components/mypages/MyHexChart";

import { Col, Container, Row } from "react-bootstrap";
import "../components/mypages/mypage.css";

function MyPage() {
	return (
		<Container fluid className="cardPage-wrapper myPage-background">
			<Row className="mt-4">
				<Col>
					<h4>🧑‍💻 마이페이지</h4>
				</Col>
			</Row>
			<Row className="mt-2 myPage-wrapper">
				<Col className="userCard-max-width">
					<h5 className="myPage-container-title">👤 내 정보</h5>
					<div className="myPage-container">
						<MyInfoForm />
					</div>
					<hr />
					<div>
						<MyHexChart />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default MyPage;
