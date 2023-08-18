import React from "react";
import MyInfoForm from "../components/mypages/MyInfoForm";
import MyHexChart from "../components/mypages/MyHexChart";

import { Col, Container, Row } from "react-bootstrap";
import "../components/mypages/mypage.css";

function MyPage() {
	return (
		<Container fluid>
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
					<h5 className="myPage-container-title pt-3">
						💙 나를 표현하는 육각형
					</h5>
					<div className="myPage-container d-flex justify-content-center">
						<MyHexChart />
					</div>
					<hr />
					<h5 className="myPage-container-title pt-3">💙 내가 만드는 질문</h5>
					<hr />
					<h5 className="myPage-container-title pt-3">💙 내가 받은 피드백</h5>
				</Col>
			</Row>
		</Container>
	);
}

export default MyPage;
