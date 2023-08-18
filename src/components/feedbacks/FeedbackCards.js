import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "./feedback.css";

export const dummyFeedbackData = [
	{
		id: 1,
		title: "개쩌는 커뮤니케이션",
		comment: "",
	},
	{
		id: 2,
		title: "계획성 최고",
		comment: "",
	},
	{
		id: 3,
		title: "성실함이 뛰어남",
		comment: "",
	},
];

function FeedbackCards({ pageType }) {
	const [feedbackData, setFeedbackData] = useState(dummyFeedbackData);
	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");

		const headers = {
			"Content-type": "application/json; charset=UTF-8",
			Accept: "*/*",
			"X-AUTH-TOKEN": "Bearer " + accessToken,
		};

		axios
			.get("http://43.202.59.248:8080/api/feedback?userId=8&pinned=true", {
				headers,
			})
			.then((res) => {
				const result = res.data.response;
				setFeedbackData(
					result.map((item) => {
						return {
							id: item.answerId,
							title: item.title,
							comment: item.content,
						};
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const renderFeedbackCards = (feedbackData) => {
		return feedbackData.map((data) => {
			return (
				<Col key={data.id} className="feedback-max-width">
					<Card border="secondary">
						<Card.Header>{data.title}</Card.Header>
						<Card.Body>{data.comment}</Card.Body>
						{/* <Card.Footer>나는 마이페이지다....</Card.Footer> */}
					</Card>
				</Col>
			);
		});
	};

	const renderPinnedFeedbackCards = (feedbackData) => {
		return feedbackData.map((data) => {
			return (
				<Col key={data.id} className="feedback-max-width">
					<Card border="secondary">
						<Card.Header>{data.title}</Card.Header>
						<Card.Body>{data.comment}</Card.Body>
					</Card>
				</Col>
			);
		});
	};

	return (
		<>
			<Row className="pt-2 pb-2 feedback-row">
				{pageType === "cardpage"
					? renderPinnedFeedbackCards(feedbackData)
					: renderFeedbackCards(feedbackData)}
			</Row>
		</>
	);
}
export default FeedbackCards;
