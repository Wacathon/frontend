import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export const feedbackData = [
	{
		id: 1,
		title: "개쩌는 커뮤니케이션",
		comment:
			"ㅈ덕로댜ㅕㅓ휻휺ㄴㅎ뉴ㅓㅎㄴ윻넣너ㄴ엏ㄴ후ㄴㅇ러ㅝㄴㅇ허ㅜㄴㅇ허ㅜㄴㅇ후ㅏㄴ앟ㄴ아훈아ㅜ한ㅇ훈아훈아훈아ㅜㅎㄴ아훈ㅇ한ㅇ하ㅜㅇㄴ훈아훈ㅇ한ㅇ후ㅏㄴ웋ㄴ아ㅜ히ㅏㄴ웋낳ㄴㄴ아훈아훈ㅇ훈ㅇ훈ㄴ아훈웅ㅎㄴㄴㄴ",
	},
	{
		id: 2,
		title: "계획성 최고",
		comment:
			"ㅈ덕로댜ㅕㅓ휻휺ㄴㅎ뉴ㅓㅎㄴ윻넣너ㄴ엏ㄴ후ㄴㅇ러ㅝㄴㅇ허ㅜㄴㅇ허ㅜㄴㅇ후ㅏㄴ앟ㄴ아훈아ㅜ한ㅇ훈아훈아훈아ㅜㅎㄴ아훈ㅇ한ㅇ하ㅜㅇㄴ훈아훈ㅇ한ㅇ후ㅏㄴ웋ㄴ아ㅜ히ㅏㄴ",
	},
	{
		id: 3,
		title: "성실함이 뛰어남",
		comment: "나는 성실의 왕이다...",
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
			<Row className="pt-2 pb-2">{renderFeedbackCards(feedbackData)}</Row>
		</>
	);
}
export default Feedback;
