import React, { useEffect, useState } from "react";
import { getFeedbackList } from "../../hooks/useAxiosFeedbacks";
import FeedbackCards from "./FeedbackCards";

import "./feedback.css";
import { Col, Row } from "react-bootstrap";
import { testUserFeedbackData, testUserInfo } from "../../testData";

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
		setFeedbackData(testUserFeedbackData.filter((el) => el.isPinned === true));
	}, []);

	return (
		<div>
			<h4 className="cardPage-user-card-title">📌 Pinned Feedbacks</h4>
			<Row className="p-2">
				{feedbackData.map((item, idx) => (
					<Col key={item.answerId}>
						<FeedbackCards item={item} idx={idx} />
					</Col>
				))}
			</Row>
		</div>
	);
}
export default PinnedFeedbackList;
