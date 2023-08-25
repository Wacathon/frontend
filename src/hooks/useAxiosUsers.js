import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	Accept: "*/*",
	"X-AUTH-TOKEN": "Bearer " + accessToken,
};

// POST - 유저 로그인
const userLogin = async (email, passwd, navigator) => {
	try {
		const {
			data: { response, success },
		} = await axios.post("http://43.202.59.248:8080/api/member/login", {
			email,
			passwd,
		});
		if (success) {
			const { accessToken, refreshToken } = response;
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("refreshToken", refreshToken);
			navigator("/", { replace: true });
			window.location.reload();
		}
	} catch (e) {
		console.error(e);
	}
};

// POST - 유저 회원가입
const userSignup = async (email, introduce, name, passwd, phoneNum) => {
	try {
		const {
			data: { success, error },
		} = await axios.post("http://43.202.59.248:8080/api/member/join", {
			email,
			introduce,
			name,
			passwd,
			phoneNum,
		});
		if (success) {
			alert("회원가입이 완료되었습니다!");
		} else {
			console.log(error);
		}
	} catch (e) {
		console.error(e);
	}
};

// GET - 유저 프로필 조회
const getUserProfile = async () => {
	try {
		const res = await axios.get(
			"http://43.202.59.248:8080/api/member/myProfile",
			{ headers }
		);
		const userInfo = await res.data.response;
		return userInfo;
	} catch (err) {
		console.log(err);
	}
};

// POST - 유저 정보 수정
const updateUserInfo = async (email, introduce, phoneNum) => {
	try {
		await axios.post(
			"http://43.202.59.248:8080/api/member/introduce",
			{ email: email, introduce: introduce, phoneNum: phoneNum },
			{ headers }
		);
	} catch (err) {
		console.log(err);
	}
};

export { getUserProfile, updateUserInfo, userLogin, userSignup };