import React from "react";
import MyQuestionList from "../components/mypage/MyQuestionList";
import FeedbackList from "../components/feedbacks/FeedbackList";

function MyFeedbackPage() {
	return (
		<div className="wrapper">
			<div className="myPage-container">
				<div className="p-2">
					<h5 className="myPage-container-title">💙 내가 만드는 질문</h5>
					<MyQuestionList />
				</div>
				<hr />
				<div className="p-2">
					<h5 className="myPage-container-title">💙 내가 받은 피드백</h5>
					<FeedbackList />
				</div>
			</div>
		</div>
	);
}

export default MyFeedbackPage;
