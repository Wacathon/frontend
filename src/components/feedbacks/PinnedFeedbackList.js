import React, { useEffect, useState } from "react";
import { getFeedbackList } from "../../hooks/useAxiosFeedbacks";
import { relationEnum } from "./MyFeedbackList";
import { testUserFeedbackData, testUserInfo } from "../../testData";
import FeedbackCards from "./FeedbackCards";

import "./feedback.css";

function PinnedFeedbackList() {
	const [userId, setUserId] = useState(testUserInfo.memberId);
	const [feedbackData, setFeedbackData] = useState([]);

	useEffect(() => {
		// axios
		// getFeedbackList(false, userId).then((data) =>
		// 	setFeedbackData(
		// 		data
		// 			.filter((el) => el.pinned === true)
		// 			.map((item) => {
		// 				return {
		// 					answerId: item.answerId,
		// 					isPinned: item.pinned,
		// 					questionTitle: item.questionTitle,
		// 					title: item.title,
		// 					content: item.content,
		// 				};
		// 			})
		// 	)
		// );

		// test data
		setFeedbackData(
			testUserFeedbackData
				.filter((el) => el.isPinned === true)
				.map((item) => {
					return {
						...item,
						relationObj: relationEnum.filter(
							(el) => el.type === item.relationship
						)[0],
					};
				})
		);
	}, []);

	return (
		<div className="user-card-feedback-0">
			<div className="user-card-feedback-1">
				<span className="user-card-feedback-title">
					{testUserInfo.name}님의 Feedback
				</span>
				<div className="user-card-feedback-list">
					{feedbackData.map((item, idx) => (
						<div key={item.answerId}>
							<FeedbackCards item={item} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default PinnedFeedbackList;
