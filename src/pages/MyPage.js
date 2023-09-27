import React from "react";
import MyInfoForm from "../components/mypage/MyInfoForm";
import { userLogout } from "../hooks/useAxiosAuth";

import "../components/mypage/mypage.css";
import { Button } from "react-bootstrap";

function MyPage() {
	return (
		<div className="wrapper">
			<h4 className="ps-2">🧑‍💻 마이페이지</h4>
			<div className="myPage-container">
				<div className="p-2">
					<h5 className="myPage-container-title">👤 내 정보</h5>
					<MyInfoForm />
				</div>
				<hr />
				<div className="d-flex justify-content-end">
					<Button bg="outline-danger" onClick={userLogout}>
						로그아웃
					</Button>
				</div>
			</div>
		</div>
	);
}

export default MyPage;
