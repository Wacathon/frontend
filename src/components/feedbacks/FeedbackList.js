import React, { useEffect, useState } from "react";
import { getFeedbackList } from "../../hooks/useAxiosFeedbacks";
import FeedbackCards from "./FeedbackCards";

import "./feedback.css";
import { Stack } from "react-bootstrap";
import { testUserFeedbackData } from "../../testData";

export const relationEnum = [
	{ name: "학교 동기, 선후배", type: "SCHOOL_COLLEAGUE", icon: "🏫" },
	{ name: "직장 동료", type: "COMPANY_COLLEAGUE", icon: "💼" },
	{ name: "친구", type: "FRIEND", icon: "👯" },
	{ name: "기타", type: "ETC", icon: "💬" },
];

function FeedbackList() {
	const userId = 3;
	const [feedbackData, setFeedbackData] = useState([]);

	const refreshFeedbackList = () => {
		// axios
		// getFeedbackList(false, userId).then((data) =>
		// 	setFeedbackData(
		// 		data.map((item) => {
		// 			return {
		// 				id: item.answerId,
		// 				isPinned: item.pinned,
		// 				questionTitle: item.questionTitle,
		// 				title: item.title,
		// 				content: item.content,
		// 				relationObj:
		// 					relationEnum.filter((el) => el.type === item.relationship)[0] ||
		// 					relationEnum[3],
		// 			};
		// 		})
		// 	)
		// );

		// test data
		setFeedbackData(
			testUserFeedbackData.map((item) => {
				return {
					id: item.answerId,
					isPinned: item.isPinned,
					questionTitle: item.questionTitle,
					content: item.content,
					relationObj:
						relationEnum.filter((el) => el.type === item.relationship)[0] ||
						relationEnum[3],
				};
			})
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
