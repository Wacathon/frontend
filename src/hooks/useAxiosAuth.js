import axios from "axios";

// const SERVER_MEMBER_URL = process.env.REACT_APP_SERVER_BASE_URL + "/api/member";
const SERVER_MEMBER_URL = process.env.REACT_APP_SERVER_NEW_URL + "/api/member";

const accessToken = localStorage.getItem("accessToken")
	? "Bearer " + localStorage.getItem("accessToken")
	: "";

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": accessToken,
};

// POST - 유저 로그인
const userLogin = async (email, passwd) => {
	try {
		const {
			data: { response, success },
		} = await axios.post(`${SERVER_MEMBER_URL}/sign-in`, {
			email,
			passwd,
		});
		if (success) {
			const { accessToken, refreshToken } = response;
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("refreshToken", refreshToken);
			return success;
		}
	} catch (e) {
		console.error(e);
		console.error("Error: " + e.response.data.error.message);
	}
};

// 유저 로그아웃
const userLogout = () => {
	if (window.confirm("로그아웃 하시겠습니까?")) {
		window.localStorage.clear();
		window.location.replace(process.env.REACT_APP_BASE_URL);
	}
};

// POST - 유저 회원가입
const userSignup = async (
	email,
	introduce,
	name,
	passwd,
	phoneNum,
	navigate
) => {
	try {
		const {
			data: { success, error },
		} = await axios.post(`${SERVER_MEMBER_URL}/sign-up`, {
			email,
			introduce,
			name,
			passwd,
			phoneNum,
		});
		if (success) {
			console.log("성공!");
			// userLogin(email, passwd).then((res) => {
			// 	if (res) {
			// 		navigate("/tag-setup", {
			// 			replace: true,
			// 		});
			// 	}
			// });
		} else {
			alert("회원가입에 실패하였습니다.");
			console.log(error.message);
		}
	} catch (e) {
		console.error(e);
		console.error("Error: " + e.response.data.error.message);
	}
};

// GET - 유저 프로필 조회
const getUserProfile = async () => {
	try {
		const res = await axios.get(SERVER_MEMBER_URL, { headers });
		const userInfo = await res.data.response;
		return userInfo;
	} catch (err) {
		console.log(err);
	}
};

// PUT - 유저 정보 수정
const updateUserInfo = async (
	email,
	introduce,
	isPublicEmail,
	isPublicIntroduce,
	isPublicPhone,
	phoneNum
) => {
	try {
		const {
			data: { success, error },
		} = await axios.put(
			SERVER_MEMBER_URL,
			{
				email: email,
				introduce: introduce,
				isPublicEmail: isPublicEmail,
				isPublicIntroduce: isPublicIntroduce,
				isPublicPhone: isPublicPhone,
				phoneNum: phoneNum,
			},
			{ headers }
		);
		if (success) {
			return success;
		} else {
			console.log(error.message);
		}
	} catch (err) {
		console.log(err);
	}
};

// PUT - 유저 비밀번호 변경
const updateUserPasswd = async (newPasswd, originPasswd) => {
	try {
		const {
			data: { success, error },
		} = await axios.put(
			`${SERVER_MEMBER_URL}/password`,
			{ newPasswd: newPasswd, originPasswd: originPasswd },
			{ headers }
		);
		if (success) {
			return success;
		} else {
			console.log(error.message);
		}
	} catch (err) {
		console.log(err);
	}
};

export {
	getUserProfile,
	userLogout,
	updateUserInfo,
	updateUserPasswd,
	userLogin,
	userSignup,
};
