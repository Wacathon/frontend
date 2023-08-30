import React from "react";
import MyInfoForm from "../components/profile/MyInfoForm";
import MyChart from "../components/profile/MyChart";
import MyQuestionList from "../components/profile/MyQuestionList";
import FeedbackList from "../components/feedbacks/FeedbackList";
import { userLogout } from "../hooks/useAxiosAuth";

import "../components/profile/mypage.css";
import { Button } from "react-bootstrap";

function ProfilePage() {
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
					<MyChart />
				</div>
				<hr />
				<div className="p-2">
					<h5 className="myPage-container-title">💙 내가 만드는 질문</h5>
					<MyQuestionList />
				</div>
				<hr />
				<div className="p-2">
					<h5 className="myPage-container-title">💙 내가 받은 피드백</h5>
					<FeedbackList />
				</div>
				<hr />
				<div className="d-flex justify-content-end">
					<Button bg="outline-danger" onClick={userLogout}>
						로그아웃
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
