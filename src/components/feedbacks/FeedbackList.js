import React, { useEffect, useState } from "react";
import { getFeedbackList } from "../../hooks/useAxiosFeedbacks";
import FeedbackCards from "./FeedbackCards";

import "./feedback.css";
import { Stack } from "react-bootstrap";

function FeedbackList() {
	const userId = 3;
	const [feedbackData, setFeedbackData] = useState([]);

	const refreshFeedbackList = () => {
		getFeedbackList(false, userId).then((data) =>
			setFeedbackData(
				data.map((item) => {
					return {
						id: item.answerId,
						isPinned: item.pinned,
						questionTitle: item.questionTitle,
						title: item.title,
						content: item.content,
					};
				})
			)
		);
	};

	useEffect(() => {
		refreshFeedbackList();
	}, []);

	// pinned된 피드백이 먼저 나오게 정렬하는 함수
	const sortFeedbackList = (a, b) => {
		return b.isPinned - a.isPinned;
	};

	return (
		<Stack gap={3}>
			{feedbackData.sort(sortFeedbackList).map((item) => (
				<FeedbackCards
					key={item.id}
					item={item}
					pageType="mypage"
					refreshFeedbackList={refreshFeedbackList}
				/>
			))}
		</Stack>
	);
}
export default FeedbackList;
