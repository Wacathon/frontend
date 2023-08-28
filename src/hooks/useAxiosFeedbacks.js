import axios from "axios";

const SERVER_FEEDBACK_URL =
	process.env.REACT_APP_SERVER_BASE_URL + "/api/feedback";

const accessToken = localStorage.getItem("accessToken");

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": "Bearer " + accessToken,
};

// GET - 유저의 피드백 리스트 조회
const getFeedbackList = async (isPinned, userId) => {
	try {
		const res = await axios.get(
			`${SERVER_FEEDBACK_URL}?pinned=${isPinned}&userId=${userId}`
		);
		const result = await res.data.response;
		const feedbacks = await result
			.filter((el) => el.content !== "" && el.title !== "")
			.sort((a, b) => a.answerId - b.answerId);
		return feedbacks;
	} catch (err) {
		console.log(err);
	}
};

// POST - 유저에 대한 피드백 답변 생성
const postFeedbackAnswer = async (
	userId,
	questionDatas,
	indicateDatas,
	relationData
) => {
	try {
		const res = await axios.post(`${SERVER_FEEDBACK_URL}/${userId}`, {
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
		});
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// POST - 유저의 고정 피드백 설정
const updatePinnedFeedbacks = async (answerId, isPinned) => {
	try {
		const res = await axios.post(
			`${SERVER_FEEDBACK_URL}/pinned`,
			{ answerId, pinned: isPinned },
			{ headers }
		);
		const response = await res.data.success;
		return response;
	} catch (err) {
		console.log(err);
	}
};

export { getFeedbackList, postFeedbackAnswer, updatePinnedFeedbacks };
