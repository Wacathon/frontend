import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components/initSet/initSet.css";
import { Button } from "react-bootstrap";

function InitSetPage() {
	const navigate = useNavigate();
	const [userId, setUserId] = useState(3);

	const gotoNextStage = () => {
		navigate(`/tag-setup/${userId}/progress/1`);
	};

	return (
		<div className="initSet-container">
			<h2>👋 익명 님, 환영합니다</h2>
			<h3>나만의 명함 만들기</h3>
			<Button onClick={gotoNextStage}>시작하기</Button>
		</div>
	);
}

export default InitSetPage;
