import React from "react";
import { updatePinnedFeedbacks } from "../../hooks/useAxiosFeedbacks";

import "./feedback.css";

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
		<div className="user-card-feedback-card">
			{/* <div>
				<div>
					{item.isPinned ? (
						<h5 className="m-0">📌 피드백 #{item.answerId}</h5>
					) : (
						<span>피드백 #{item.id}</span>
					)}
					{pageType === "mypage" && (
						<button
							variant={item.isPinned ? "outline-primary" : "outline-secondary"}
							onClick={() => onPinClicked(item)}
						>
							📌
						</button>
					)}
				</div>
			</div> */}
			<div className="user-card-feedback-card-title">
				<span id="relationship-icon">{item.relationObj.icon}</span>
				<span id="relationship-name"># {item.relationObj.name}</span>
			</div>
			<hr className="user-card-feedback-card-line" />
			<div className="user-card-feedback-card-content">
				<span>{item.questionTitle}</span>
				<span id="feedback-content">{item.content}</span>
			</div>
		</div>
	);
}

export default FeedbackCards;
