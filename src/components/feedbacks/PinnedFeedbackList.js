import React, { useEffect, useState } from "react";
import { getFeedbackList } from "../../hooks/useAxiosFeedbacks";
import FeedbackCards from "./FeedbackCards";

import "./feedback.css";
import { Col, Row } from "react-bootstrap";

function PinnedFeedbackList() {
	const userId = 3;
	const [feedbackData, setFeedbackData] = useState([]);

	useEffect(() => {
		getFeedbackList(false, userId).then((data) =>
			setFeedbackData(
				data
					.filter((el) => el.pinned === true)
					.map((item) => {
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
	}, []);

	return (
		<Row className="p-2">
			{feedbackData.map((item, idx) => (
				<Col key={item.id}>
					<FeedbackCards item={item} idx={idx} />
				</Col>
			))}
		</Row>
	);
}
export default PinnedFeedbackList;
