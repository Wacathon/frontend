import React, { useEffect, useState } from "react";
import { Button, CloseButton, Form, InputGroup, Stack } from "react-bootstrap";
import axios from "axios";

function MyQuestion() {
	const [userId, setUserId] = useState(3);
	const [question, setQuestion] = useState("");
	const [questionList, setQuestionList] = useState([]);

	useEffect(() => {
		axios
			.get(`http://43.202.59.248:8080/api/question/${userId}`)
			.then((res) => {
				const result = res.data.response;
				setQuestionList(
					result.map((item) => {
						return item.title;
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onAddQuestion = async () => {
		const accessToken = localStorage.getItem("accessToken");
		await axios.post(
			"http://43.202.59.248:8080/api/question",
			{
				title: question,
			},
			{
				headers: {
					"X-AUTH-TOKEN": `Bearer ${accessToken}`,
				},
			}
		);
		alert("정보가 수정되었습니다!");

		axios
			.get(`http://43.202.59.248:8080/api/question/${userId}`)
			.then((res) => {
				const result = res.data.response;
				setQuestionList(
					result.map((item) => {
						return item.title;
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onTextChange = (e) => {
		const {
			target: { value },
		} = e;
		setQuestion(value);
	};

	const onDeleteQuestion = () => {
		// 피드백 질문 지우는 코드
		console.log("question delete");
	};

	const renderQuestionList = () => {
		return questionList.map((idx) => {
			return (
				<div key={idx} className="d-flex justify-content-between">
					<span>{idx}</span>
					<CloseButton onClick={onDeleteQuestion} />
				</div>
			);
		});
	};

	return (
		<div>
			<InputGroup>
				<Form.Control
					type="text"
					placeholder="피드백 받을 질문을 입력해주세요."
					value={question}
					onChange={onTextChange}
				/>
				<Button onClick={onAddQuestion}>추가</Button>
			</InputGroup>
			<Stack gap={2} className="mt-3 px-3">
				{renderQuestionList()}
			</Stack>
		</div>
	);
}

export default MyQuestion;
