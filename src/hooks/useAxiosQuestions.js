import axios from "axios";

const SERVER_QUESTION_URL =
	process.env.REACT_APP_SERVER_BASE_URL + "/api/question";

const accessToken = localStorage.getItem("accessToken")
	? "Bearer " + localStorage.getItem("accessToken")
	: "";

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": accessToken,
};

// GET - 유저 설정 질문 조회
const getUserCustomQuestions = async (userId, setList) => {
	try {
		const res = await axios.get(`${SERVER_QUESTION_URL}/${userId}`);
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
			SERVER_QUESTION_URL,
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
			`${SERVER_QUESTION_URL}/${questionId}`,
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
		const res = await axios.delete(`${SERVER_QUESTION_URL}/${questionId}`, {
			headers,
		});
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
