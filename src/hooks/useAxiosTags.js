import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": "Bearer " + accessToken,
};

// GET - 모든 지표들 조회
const getAllTags = async () => {
	try {
		const res = await axios.get("http://43.202.59.248:8080/api/tag");
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

// POST - 지표 추가
const addTag = async (tagName) => {
	try {
		const res = await axios.post("http://43.202.59.248:8080/api/tag", {
			tagName: tagName,
		});
		const response = await res.data.response;
		return response;
	} catch (err) {
		console.log(err);
	}
};

export { getAllTags, addTag };
