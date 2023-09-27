import React from "react";
import MyInfoForm from "../components/mypage/MyInfoForm";
import MyChart from "../components/mypage/MyChart";
import MyQuestionList from "../components/mypage/MyQuestionList";
import FeedbackList from "../components/feedbacks/FeedbackList";
import { userLogout } from "../hooks/useAxiosAuth";

import "../components/mypage/mypage.css";

function MyPage() {
	return (
		<div className="wrapper">
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
					<button bg="outline-danger" onClick={userLogout}>
						로그아웃
					</button>
				</div>
			</div>
		</div>
	);
}

export default MyPage;
