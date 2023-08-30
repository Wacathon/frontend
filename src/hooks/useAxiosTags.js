import axios from "axios";

const SERVER_TAG_URL = process.env.REACT_APP_SERVER_BASE_URL + "/api/tag";

const accessToken = localStorage.getItem("accessToken")
	? "Bearer " + localStorage.getItem("accessToken")
	: "";

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": accessToken,
};

// GET - 모든 지표들 조회
const getAllTags = async () => {
	try {
		const res = await axios.get(SERVER_TAG_URL);
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// POST - 지표 추가
const addTag = async (tagName) => {
	try {
		const res = await axios.post(SERVER_TAG_URL, {
			tagName: tagName,
		});
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

export { getAllTags, addTag };
