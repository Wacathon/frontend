import axios from "axios";

const SERVER_INDICATOR_URL =
	process.env.REACT_APP_SERVER_BASE_URL + "/api/indicator";

const accessToken = localStorage.getItem("accessToken")
	? "Bearer " + localStorage.getItem("accessToken")
	: "";

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": accessToken,
};

// GET - 유저 평가정보 조회
const getMyIndicatorInfo = async () => {
	try {
		const res = await axios.get(SERVER_INDICATOR_URL, {
			headers,
		});
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// POST - 유저 태그 정보 설정
const setMyIndicators = async (tagList, userId) => {
	try {
		const res = await axios.post(
			SERVER_INDICATOR_URL,
			{
				tagList: tagList,
				userId: userId,
			},
			{ headers }
		);
		const response = await res.data.success;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// GET - 유저 명함정보 조회 (개인정보, 육각형 지표정보)
const getMyNameCardInfo = async (userId) => {
	try {
		const res = await axios.get(`${SERVER_INDICATOR_URL}/${userId}`);
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// GET - 피드백 받을 유저의 육각형 지표 조회
const getUserIndicators = async (userId) => {
	try {
		const res = await axios.get(`${SERVER_INDICATOR_URL}/answer/${userId}`);
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

export {
	getMyIndicatorInfo,
	setMyIndicators,
	getMyNameCardInfo,
	getUserIndicators,
};
