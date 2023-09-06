import React from "react";
import { Button } from "react-bootstrap";

function InitProgressComplete({ gotoNextStage, gotoPrevStage }) {
	return (
		<>
			<div className="initSet-progress-body">
				<h2>나만의 명함 생성 완료!</h2>
			</div>
			<div className="initSet-progress-footer">
				<Button onClick={gotoPrevStage}>이전 단계</Button>
				<Button onClick={gotoNextStage}>완성된 명함 보러가기 👉</Button>
			</div>
		</>
	);
}

export default InitProgressComplete;
