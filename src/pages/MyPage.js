import React, { useState } from "react";
import MyInfoForm from "../components/mypage/MyInfoForm";
import { userLogout } from "../hooks/useAxiosAuth";

import "../components/mypage/mypage.css";
import { testUserInfo } from "../testData";

function MyPage() {
	const [userName, setUserName] = useState(testUserInfo.name);

	const changePasswd = () => {
		console.log("change pw");
	};

	return (
		<div className="wrapper">
			<span className="my-page-title">
				<span id="user-name">{userName}</span>님의 마이페이지에요.
			</span>
			<div className="my-page-0">
				<div className="my-page-info">
					<MyInfoForm />
					<div className="my-page-btn-box">
						<button onClick={changePasswd} className="my-page-btn danger-btn">
							비밀번호 변경
						</button>
						<button onClick={userLogout} className="my-page-btn primary-btn">
							로그아웃
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyPage;
