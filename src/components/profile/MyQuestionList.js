import React, { useEffect, useState } from "react";
import {
	addUserCustomQuestion,
	getUserCustomQuestions,
} from "../hooks/useAxiosQuestions";
import MyQuestion from "../questions/MyQuestion";

import { Button, Form, InputGroup, Stack } from "react-bootstrap";

function MyQuestionList() {
	const [userId, setUserId] = useState(3);
	const [question, setQuestion] = useState("");
	const [questionList, setQuestionList] = useState([]);

	useEffect(() => {
		getUserCustomQuestions(userId, setQuestionList);
	}, []);

	const onAddQuestion = async () => {
		if (question === "") {
			alert("질문을 작성해주세요!");
			return;
		}
		addUserCustomQuestion(question).then((res) => {
			if (res) {
				setQuestion("");
				getUserCustomQuestions(userId, setQuestionList);
				alert("질문이 생성되었습니다.");
			} else {
				alert("질문 생성에 실패하였습니다.");
			}
		});
	};

	const onTextChange = (e) => {
		const {
			target: { value },
		} = e;
		setQuestion(value);
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
			<Stack gap={3} className="mt-3 px-2">
				{questionList.map((item) => {
					return (
						<MyQuestion
							key={item.questionId}
							question={item}
							setQuestionList={setQuestionList}
						/>
					);
				})}
			</Stack>
		</div>
	);
}

export default MyQuestionList;
