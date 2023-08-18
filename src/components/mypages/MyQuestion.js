import React, { useState } from "react";
import { Button, CloseButton, Form, InputGroup, Stack } from "react-bootstrap";

const questionData = ["1.....", "2............."];

function MyQuestion() {
	const [question, setQuestion] = useState("");
	const [questionList, setQuestionList] = useState(questionData);

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
				<Button>추가</Button>
			</InputGroup>
			<Stack gap={2} className="mt-3 px-3">
				{renderQuestionList()}
			</Stack>
		</div>
	);
}

export default MyQuestion;
