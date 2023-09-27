import React from "react";
import MyQuestionList from "../components/questions/MyQuestionList";
import MyFeedbackList from "../components/feedbacks/MyFeedbackList";

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
					<MyFeedbackList />
				</div>
			</div>
		</div>
	);
}

export default MyFeedbackPage;
