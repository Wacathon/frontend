import React from "react";
import MyInfoForm from "../components/mypages/MyInfoForm";
import MyHexChart from "../components/mypages/MyHexChart";

import { Button, Col, Container, Row } from "react-bootstrap";
import "../components/mypages/mypage.css";
import MyQuestion from "../components/mypages/MyQuestion";
import FeedbackCards from "../components/feedbacks/FeedbackCards";

function MyPage() {
	const onLogout = () => {
		window.localStorage.removeItem("accessToken");
		window.localStorage.removeItem("refreshToken");
		window.location.reload();
	};

	return (
		<div className="myPage-wrapper">
			<h4 className="ps-2">🧑‍💻 마이페이지</h4>
			<div className="myPage-container">
				<div className="p-2">
					<h5 className="myPage-container-title">👤 내 정보</h5>
					<MyInfoForm />
				</div>
				<hr />
				<div className="p-2">
					<h5 className="myPage-container-title">💙 나를 표현하는 육각형</h5>
					<MyHexChart />
				</div>
				<hr />
				<div className="p-2">
					<h5 className="myPage-container-title">💙 내가 만드는 질문</h5>
					<MyQuestion />
				</div>
				<hr />
				<div className="p-2">
					<h5 className="myPage-container-title">💙 내가 받은 피드백</h5>
					<FeedbackCards pageType="mypage" />
				</div>
				<hr />
				<div className="d-flex justify-content-end">
					<Button bg="outline-danger" onClick={onLogout}>
						로그아웃
					</Button>
				</div>
			</div>
		</div>
	);
}

export default MyPage;

// return (
// 	<Container fluid className="myPage-wrapper">
// 		<Row className="mt-4">
// 			<Col>
// 				<h4>🧑‍💻 마이페이지</h4>
// 			</Col>
// 		</Row>
// 		<Row className="mt-2 mb-2 myPage-info-wrapper">
// 			<Col className="userCard-max-width">
// 				<h5 className="myPage-container-title">👤 내 정보</h5>
// 				<div className="myPage-container">
// 					<MyInfoForm />
// 				</div>
// 				<hr />
// 				<h5 className="myPage-container-title pt-3">
// 					💙 나를 표현하는 육각형
// 				</h5>
// 				<div className="myPage-container d-flex justify-content-center">
// 					<MyHexChart />
// 				</div>
// 				<hr />
// 				<h5 className="myPage-container-title pt-3">💙 내가 만드는 질문</h5>
// 				<div className="myPage-container">
// 					<MyQuestion />
// 				</div>
// 				<hr />
// 				<h5 className="myPage-container-title pt-3">💙 내가 받은 피드백</h5>
// 				<div className="mb-3">
// 					<FeedbackCards pageType="mypage" />
// 				</div>
// 			</Col>
// 			<hr />
// 			<Row>
// 				<Col className="d-flex justify-content-end">
// 					<Button bg="outline-danger" onClick={onLogout}>
// 						로그아웃
// 					</Button>
// 				</Col>
// 			</Row>
// 		</Row>
// 	</Container>
// );
