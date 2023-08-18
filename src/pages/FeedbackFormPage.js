import React, { useEffect, useState } from "react";

import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { InputNumber, Slider } from "antd";

import axios from "axios";

const relationEnum = ["SCHOOL_COLLEAGUE", "COMPANY_COLLEAGUE", "FRIEND", "ETC"];

function FeedbackFormPage() {
	const [indicateDatas, setIndicateDatas] = useState([]);
	const [questionDatas, setQuestionDatas] = useState([]);

	useEffect(() => {
		axios
			.all([
				axios.get("http://43.202.59.248:8080/api/indicator/answer/3"),
				axios.get("http://43.202.59.248:8080/api/question/3"),
			])
			.then(
				axios.spread((res1, res2) => {
					console.log(res1, res2);
					const tags = res1.data.response.map((el) => {
						return {
							tagId: el.tagId,
							label: el.tagName,
							data: 0,
						};
					});
					setIndicateDatas(tags);
					const questions = res2.data.response.map((el) => ({
						questionId: el.questionId,
						title: el.title,
						content: "",
					}));
					setQuestionDatas(questions);
				})
			);
		// axios.get("http://43.202.59.248:8080/api/question/3").then((res) => {
		// 	console.log(res.data.response);
		// 	const questions = res.data.response.map((el) => ({
		// 		questionId: el.questionId,
		// 		title: el.title,
		// 		content: "",
		// 	}));
		// 	setQuestionDatas(questions);
		// });
	}, []);

	const saveFeedbackData = async () => {
		await axios.post(
			"http://43.202.59.248:8080/api/feedback/3",
			{
				answers: questionDatas.map((el) => {
					return {
						questionId: el.questionId,
						title: el.title,
						content: el.content,
					};
				}),
				indicators: indicateDatas.map((el) => ({
					tagId: el.tagId,
					tagScore: el.data,
				})),
				relationship: "SCHOOL_COLLEAGUE",
			}
			// {
			//   headers : {
			//     Authorization: `Bearer ${accessToken}`
			//   }
			// }
		);
	};

	// const renderRelationInput

	const renderIndicatorInputs = () => {
		return indicateDatas.map((item) => {
			return (
				<Row key={item.tagId}>
					<Col>{item.label}</Col>
					<Col span={12}>
						<Slider
							min={1}
							max={100}
							onChange={(v) => {
								const labelIndex = indicateDatas.findIndex(
									({ label }) => label === item.label
								);

								setIndicateDatas([
									...indicateDatas.slice(0, labelIndex),
									{ ...indicateDatas[labelIndex], data: v },
									...indicateDatas.slice(labelIndex + 1, indicateDatas.length),
								]);
							}}
							value={item.data}
						/>
					</Col>
					<Col span={4}>
						<InputNumber
							min={1}
							max={100}
							style={{
								margin: "0 16px",
							}}
							onChange={(v) => {
								const labelIndex = indicateDatas.findIndex(({ label }) => {
									return label === item.label;
								});
								setIndicateDatas([
									...indicateDatas.slice(0, labelIndex),
									{ ...indicateDatas[labelIndex], data: v },
									...indicateDatas.slice(labelIndex + 1, indicateDatas.length),
								]);
							}}
							value={item.data}
						/>
					</Col>
				</Row>
			);
		});
	};

	const renderQuestionInputs = () => {
		return questionDatas.map((item) => {
			return (
				<Row key={item.questionId}>
					<Col>
						<Form.Label>Q. {item.title} (최대 100자)</Form.Label>
						<Form.Control
							type="text"
							placeholder="피드백을 입력해주세요."
							maxLength={100}
							value={item.content}
							onChange={(v) => {
								const qIdx = questionDatas.findIndex(
									({ questionId }) => questionId === item.questionId
								);
								setIndicateDatas([
									...questionDatas.slice(0, qIdx),
									{ ...questionDatas[qIdx], content: v },
									...questionDatas.slice(qIdx + 1, questionDatas.length),
								]);
							}}
						/>
					</Col>
				</Row>
			);
		});
	};

	return (
		<Container className="cardPage-wrapper">
			<Row>
				<Col>
					<h4 className="cardPage-user-card-title">피드백을 남겨주세요!</h4>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Select></Form.Select>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form>{renderIndicatorInputs()}</Form>
				</Col>
			</Row>
			<Row>
				<Col>{renderQuestionInputs()}</Col>
			</Row>
			<Row>
				<Col>
					<Button onClick={saveFeedbackData}>저장</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default FeedbackFormPage;
