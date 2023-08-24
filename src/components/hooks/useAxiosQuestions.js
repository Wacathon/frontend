import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": "Bearer " + accessToken,
};

// GET - 유저 설정 질문 조회
const getUserCustomQuestions = async (userId, setList) => {
	try {
		const res = await axios.get(
			`http://43.202.59.248:8080/api/question/${userId}`
		);
		const response = await res.data.response;
		await setList(
			response.map((item) => {
				return { questionId: item.questionId, title: item.title };
			})
		);
		return response;
	} catch (err) {
		console.log(err);
	}
};

// POST - 유저 설정 질문 생성
const addUserCustomQuestion = async (question) => {
	try {
		const res = await axios.post(
			"http://43.202.59.248:8080/api/question",
			{ title: question },
			{
				headers,
			}
		);
		const response = await res.data.success;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// PUT - 유저 설정 질문 수정
const editUserCustomQuestion = async (questionId, question) => {
	try {
		const res = await axios.put(
			`http://43.202.59.248:8080/api/question/${questionId}`,
			{ title: question },
			{ headers }
		);
		const response = await res.data.success;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// DELETE - 유저 설정 질문 삭제
const deleteUserCustomQuestion = async (questionId) => {
	try {
		const res = await axios.delete(
			`http://43.202.59.248:8080/api/question/${questionId}`,
			{ headers }
		);
		const response = await res.data.success;
		return response;
	} catch (err) {
		console.log(err);
	}
};

export {
	getUserCustomQuestions,
	addUserCustomQuestion,
	editUserCustomQuestion,
	deleteUserCustomQuestion,
};
