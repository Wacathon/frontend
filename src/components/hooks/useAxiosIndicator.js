import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": "Bearer " + accessToken,
};

// GET - 유저 평가정보 조회
const getMyIndicatorInfo = async () => {
	try {
		const res = await axios.get("http://43.202.59.248:8080/api/indicator", {
			headers,
		});
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// POST - 유저 평가정보 설정
const setMyIndicators = async (tagList, userId) => {
	try {
		const res = await axios.post(
			"http://43.202.59.248:8080/api/indicator",
			{
				tagList: tagList,
				userId: userId,
			},
			{ headers }
		);
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// GET - 유저 명함정보 조회 (개인정보, 육각형 지표정보)
const getMyNamecardInfo = async (userId) => {
	try {
		const res = await axios.get(
			`http://43.202.59.248:8080/api/indicator/${userId}`
		);
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// GET - 피드백 받을 유저의 육각형 지표 조회
const getUserIndicators = async (userId) => {
	try {
		const res = await axios.get(
			`http://43.202.59.248:8080/api/indicator/answer/${userId}`
		);
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

export {
	getMyIndicatorInfo,
	setMyIndicators,
	getMyNamecardInfo,
	getUserIndicators,
};
