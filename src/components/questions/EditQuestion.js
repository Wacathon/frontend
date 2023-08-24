import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import {
	editUserCustomQuestion,
	getUserCustomQuestions,
} from "../../hooks/useAxiosQuestions";
import Inputs from "../../hooks/useInputs";

function EditQuestion({ question, setIsEdit, setQuestionList }) {
	const userId = 3;
	const [editText, setEditText] = useState(question.title);

	const onEditQuestion = () => {
		if (editText === question.title) {
			setIsEdit(false);
			return;
		}

		if (window.confirm("질문을 수정하시겠습니까?")) {
			editUserCustomQuestion(question.questionId, editText).then((res) => {
				if (res) {
					getUserCustomQuestions(userId, setQuestionList);
					alert("질문이 수정되었습니다.");
				} else {
					alert("질문 수정에 실패하였습니다.");
				}
			});
		}
		setIsEdit(false);
	};

	return (
		<InputGroup>
			<Inputs
				inputValue={editText}
				setInputValue={setEditText}
				inputPlaceholder="질문을 수정해주세요."
			/>
			<Button size="sm" variant="secondary" onClick={onEditQuestion}>
				수정
			</Button>
		</InputGroup>
	);
}

export default EditQuestion;
