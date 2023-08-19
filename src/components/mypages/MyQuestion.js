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
						return { questionId: item.questionId, title: item.title };
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onAddQuestion = async () => {
		try {
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
		} catch (err) {
			console.log(err);
		}

		alert("정보가 수정되었습니다!");

		await axios
			.get(`http://43.202.59.248:8080/api/question/${userId}`)
			.then((res) => {
				const result = res.data.response;
				setQuestionList(
					result.map((item) => {
						return { questionId: item.questionId, title: item.title };
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

	const onDeleteQuestion = async (id) => {
		const accessToken = localStorage.getItem("accessToken");
		await axios.delete(`http://43.202.59.248:8080/api/question/${id}`, {
			headers: {
				"X-AUTH-TOKEN": `Bearer ${accessToken}`,
			},
		});
		alert("질문이 삭제되었습니다!");
		axios
			.get(`http://43.202.59.248:8080/api/question/${userId}`)
			.then((res) => {
				const result = res.data.response;
				setQuestionList(
					result.map((item) => {
						return { questionId: item.questionId, title: item.title };
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const RenderQuestionList = () => {
		return questionList.map((item) => {
			return (
				<div key={item.questionId} className="d-flex justify-content-between">
					<span>{item.title}</span>
					<CloseButton onClick={() => onDeleteQuestion(item.questionId)} />
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
				<RenderQuestionList />
			</Stack>
		</div>
	);
}

export default MyQuestion;
