import React, { useState } from "react";
import {
	deleteUserCustomQuestion,
	getUserCustomQuestions,
} from "../hooks/useAxiosQuestions";
import EditQuestion from "./EditQuestion";

import { Button, CloseButton } from "react-bootstrap";

function MyQuestion({ question, setQuestionList }) {
	const userId = 3;
	const [isEdit, setIsEdit] = useState(false);

	const onEditClick = () => {
		setIsEdit((prev) => !prev);
	};

	const onDeleteQuestion = async (id) => {
		if (window.confirm("질문을 삭제하시겠습니까?")) {
			deleteUserCustomQuestion(id).then((res) => {
				if (res) {
					getUserCustomQuestions(userId, setQuestionList);
					alert("질문이 삭제되었습니다.");
				} else {
					alert("질문 삭제에 실패하였습니다.");
				}
			});
		} else {
			return;
		}
	};

	return (
		<>
			{isEdit ? (
				<>
					<EditQuestion
						question={question}
						setIsEdit={setIsEdit}
						setQuestionList={setQuestionList}
					/>
				</>
			) : (
				<div className="d-flex justify-content-between align-items-center">
					<span>{question.title}</span>
					<div className="d-flex align-items-center">
						<Button size="sm" className="me-2" onClick={onEditClick}>
							Edit
						</Button>
						<CloseButton
							onClick={() => onDeleteQuestion(question.questionId)}
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default MyQuestion;
