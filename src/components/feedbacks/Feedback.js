import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export const feedbackData = [
	{
		id: 1,
		title: "개쩌는 커뮤니케이션",
		comment: "나는 소통의 왕이다...",
	},
	{
		id: 2,
		title: "계획성 최고",
		comment: "나는 계획의 왕이다...",
	},
	{
		id: 3,
		title: "성실함이 뛰어남",
		comment: "나는 성실의 왕이다...",
	},
	{
		id: 4,
		title: "리더십 짱~",
		comment: "나는 리더십의 왕이다...",
	},
];

const renderFeedbackCards = (feedbackData) => {
	return feedbackData.map((data) => {
		return (
			<Col key={data.id}>
				<Card border="secondary">
					<Card.Header>{data.title}</Card.Header>
					<Card.Body>{data.comment}</Card.Body>
				</Card>
			</Col>
		);
	});
};

function Feedback() {
	return (
		<>
			<Row className="pt-2 pb-2">
				{renderFeedbackCards(feedbackData.slice(0, 2))}
			</Row>
			<Row className="pt-2 pb-2">
				{renderFeedbackCards(feedbackData.slice(2, 4))}
			</Row>
		</>
	);
}
export default Feedback;
