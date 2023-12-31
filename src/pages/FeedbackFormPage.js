import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { postFeedbackAnswer } from "../hooks/useAxiosFeedbacks";
import {
	getMyNameCardInfo,
	getUserIndicators,
} from "../hooks/useAxiosIndicator";

import "./feedbackform.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { InputNumber, Slider } from "antd";
import { getUserCustomQuestions } from "../hooks/useAxiosQuestions";

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
	const [userName, setUserName] = useState("");
	const [relationData, setRelationData] = useState("");
	const [indicateDatas, setIndicateDatas] = useState([]);
	const [questionDatas, setQuestionDatas] = useState([]);

	useEffect(() => {
		axios
			.all([
				getUserIndicators(userId.userId),
				getUserCustomQuestions(userId.userId, setQuestionDatas),
				getMyNameCardInfo(userId.userId),
			])
			.then(
				axios.spread((res1, res2, res3) => {
					const tags = res1.map((el) => {
						return {
							tagId: el.tagId,
							label: el.tagName,
							data: 0,
						};
					});
					setIndicateDatas(tags);
					const questions = res2.map((el) => ({
						questionId: el.questionId,
						questionTitle: el.title,
						title: "",
						content: "",
					}));
					setQuestionDatas(questions);
					setUserName(res3.userName);
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
							value={item.data}
							onChange={(e) => {
								const labelIndex = indicateDatas.findIndex(
									({ label }) => label === item.label
								);
								setIndicateDatas([
									...indicateDatas.slice(0, labelIndex),
									{ ...indicateDatas[labelIndex], data: e },
									...indicateDatas.slice(labelIndex + 1, indicateDatas.length),
								]);
							}}
						/>
					</Col>
					<Col span={4}>
						<InputNumber
							min={0}
							max={100}
							style={{
								margin: "0 16px",
							}}
							value={item.data}
							onChange={(e) => {
								const labelIndex = indicateDatas.findIndex(({ label }) => {
									return label === item.label;
								});
								setIndicateDatas([
									...indicateDatas.slice(0, labelIndex),
									{ ...indicateDatas[labelIndex], data: e },
									...indicateDatas.slice(labelIndex + 1, indicateDatas.length),
								]);
							}}
						/>
					</Col>
				</Row>
			);
		});
	};

	const renderQuestionInputs = () => {
		return questionDatas.map((item) => {
			return (
				<Row key={item.questionId} className="p-2">
					<Col>
						<Form.Label>Q. {item.questionTitle} (최대 100자)</Form.Label>
						<Form.Control
							type="text"
							placeholder="제목을 입력해주세요."
							className="mb-2"
							maxLength={100}
							value={item.title || ""}
							onChange={(e) => {
								const qIdx = questionDatas.findIndex(
									({ questionId }) => questionId === item.questionId
								);
								setQuestionDatas([
									...questionDatas.slice(0, qIdx),
									{ ...questionDatas[qIdx], title: e.target.value },
									...questionDatas.slice(qIdx + 1, questionDatas.length),
								]);
							}}
						/>
						<Form.Control
							type="text"
							placeholder="피드백을 입력해주세요."
							maxLength={100}
							value={item.content || ""}
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

	const saveFeedbackData = () => {
		if (relationData === "") {
			alert("피드백을 입력해주세요!");
			return;
		}
		postFeedbackAnswer(
			userId.userId,
			questionDatas,
			indicateDatas,
			relationData
		).then(() =>
			navigate(`/feedback-form/${userId.userId}/result`, { replace: true })
		);
	};

	return (
		<Container className="formPage-wrapper">
			<Row className="mb-3">
				<Col>
					<h3 className="user-card-title">
						{userName}님의 피드백을 남겨주세요!
					</h3>
				</Col>
			</Row>
			<Row className="px-2">
				<h5>✔️ {userName}님과 나와의 관계</h5>
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
