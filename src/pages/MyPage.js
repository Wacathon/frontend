import React from "react";
import MyInfoForm from "../components/mypage/MyInfoForm";
import { userLogout } from "../hooks/useAxiosAuth";

import "../components/mypage/mypage.css";

function MyPage() {
	const changePasswd = () => {
		console.log("change pw");
	};

	return (
		<div className="wrapper">
			<div className="my-page-0">
				<span className="my-page-title">My Page</span>
				<div className="my-page-info">
					<MyInfoForm />
					<div className="my-page-btn-box">
						<button
							onClick={changePasswd}
							className="my-page-btn my-page-pw-btn"
						>
							비밀번호 변경
						</button>
						<button onClick={userLogout} className="my-page-btn">
							로그아웃
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyPage;
