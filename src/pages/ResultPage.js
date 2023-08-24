import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ResultPage() {
	const [userId, setUserId] = useState(8);
	const navigate = useNavigate();

	const gotoNameCardPage = () => {
		navigate(`/card/${userId}`, { replace: true });
	};

	return (
		<div className="d-flex flex-column justify-content-center align-items-center formPage-wrapper">
			<h3>👍 피드백이 제출되었습니다!</h3>
			<h5 className="p-2">참여해주셔서 감사합니다.</h5>
			<Button size="lg" onClick={gotoNameCardPage}>
				👉 결과 보러가기
			</Button>
		</div>
	);
}

export default ResultPage;
