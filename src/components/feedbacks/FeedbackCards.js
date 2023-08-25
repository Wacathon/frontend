import React from "react";

import "./feedback.css";
import { Button, Card } from "react-bootstrap";
import { updatePinnedFeedbacks } from "../../hooks/useAxiosFeedbacks";

function FeedbackCards({ item, pageType, refreshFeedbackList }) {
	const onPinClicked = (el) => {
		if (
			window.confirm(
				`${
					el.isPinned
						? "피드백을 고정 해제하시겠습니까?"
						: "피드백을 고정하시겠습니까?"
				}`
			)
		) {
			updatePinnedFeedbacks(el.id, !el.isPinned).then(() =>
				refreshFeedbackList()
			);
		}
	};

	return (
		<Card border={item.isPinned ? "primary" : "secondary"}>
			<Card.Header>
				<div className="d-flex justify-content-between align-items-center">
					{/* <span>피드백 #{idx + 1}</span> */}
					{item.isPinned ? (
						<h5 className="m-0">📌 피드백 #{item.id}</h5>
					) : (
						<span>피드백 #{item.id}</span>
					)}
					{pageType === "mypage" && (
						<Button
							variant={item.isPinned ? "outline-primary" : "outline-secondary"}
							onClick={() => onPinClicked(item)}
						>
							📌
						</Button>
					)}
				</div>
			</Card.Header>
			<Card.Body>
				<Card.Title>{item.questionTitle}</Card.Title>
				{item.title && <Card.Subtitle>{item.title}</Card.Subtitle>}
				{item.content && <Card.Text>{item.content}</Card.Text>}
			</Card.Body>
		</Card>
	);
}

export default FeedbackCards;
