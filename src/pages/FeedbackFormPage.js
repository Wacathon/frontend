import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { InputNumber, Slider } from "antd";
import "./feedbackform.css";

const relationEnum = [
	{ name: "관계를 선택해주세요.", type: "" },
	{ name: "학교 동기, 선후배", type: "SCHOOL_COLLEAGUE" },
	{ name: "직장 동료", type: "COMPANY_COLLEAGUE" },
	{ name: "친구", type: "FRIEND" },
	{ name: "기타", type: "ETC" },
];

function FeedbackFormPage() {
	const userId = useParams();
	const navigate = useNavigate();
	const [userName, setUSerName] = useState("강경수");
	const [relationData, setRelationData] = useState("");
	const [indicateDatas, setIndicateDatas] = useState([]);
	const [questionDatas, setQuestionDatas] = useState([]);

	useEffect(() => {
		axios
			.all([
				axios.get(
					`http://43.202.59.248:8080/api/indicator/answer/${userId.userId}`
				),
				axios.get(`http://43.202.59.248:8080/api/question/${userId.userId}`),
			])
			.then(
				axios.spread((res1, res2) => {
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
	}, []);

	const onRelationChange = (e) => {
		const {
			target: { value },
		} = e;
		setRelationData(value);
	};

	const renderRelationInput = () => {
		return relationEnum.map((item, idx) => {
			return (
				<option key={idx} value={item.type}>
					{item.name}
				</option>
			);
		});
	};

	const renderIndicatorInputs = () => {
		return indicateDatas.map((item) => {
			return (
				<Row key={item.tagId}>
					<Col>{item.label}</Col>
					<Col span={12}>
						<Slider
							min={0}
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
							min={0}
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
		return questionDatas.map((item, idx) => {
			return (
				<Row key={idx} className="p-2">
					<Col>
						<Form.Label>Q. {item.title} (최대 100자)</Form.Label>
						<Form.Control
							type="text"
							placeholder="피드백을 입력해주세요."
							maxLength={100}
							value={item.content}
							onChange={(e) => {
								const qIdx = questionDatas.findIndex(
									({ questionId }) => questionId === item.questionId
								);
								setQuestionDatas([
									...questionDatas.slice(0, qIdx),
									{ ...questionDatas[qIdx], content: e.target.value },
									...questionDatas.slice(qIdx + 1, questionDatas.length),
								]);
							}}
						/>
					</Col>
				</Row>
			);
		});
	};

	const saveFeedbackData = async () => {
		if (relationData === "") {
			alert("피드백을 입력해주세요!");
			return;
		}
		await axios.post(
			`http://43.202.59.248:8080/api/feedback/${userId.userId}`,
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
				relationship: relationData,
			}
			// {
			//   headers : {
			//     Authorization: `Bearer ${accessToken}`
			//   }
			// }
		);
		navigate(`/feedback-form/${userId.userId}/result`, { replace: true });
	};

	return (
		<Container className="formPage-wrapper">
			<Row className="mb-3">
				<Col>
					<h3 className="cardPage-user-card-title">
						{userName}님의 피드백을 남겨주세요!
					</h3>
				</Col>
			</Row>
			<Row className="px-2">
				<h5>✔️ {userName}님와 나와의 관계</h5>
				<Row>
					<Col md={{ span: 4 }}>
						<Form.Select onChange={onRelationChange}>
							{renderRelationInput()}
						</Form.Select>
					</Col>
				</Row>
			</Row>
			<hr />
			<Row className="px-2">
				<h5>✔️ 내가 생각하는 {userName}님의 지표</h5>
				<Col className="p-3">
					<Form>{renderIndicatorInputs()}</Form>
				</Col>
			</Row>
			<hr />
			<Row className="px-2">
				<h5>✔️ {userName}님의 질문에 답해주세요!</h5>
				<Col>{renderQuestionInputs()}</Col>
			</Row>
			<hr />
			<Row className="mt-2 p-2">
				<Col className="d-flex justify-content-center">
					<Button onClick={saveFeedbackData}>저장</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default FeedbackFormPage;
