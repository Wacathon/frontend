import React, { useState } from "react";
import Inputs from "../../hooks/useInputs";
import { Button, Stack } from "react-bootstrap";

function InitUserInfo({ gotoNextStage }) {
	const [name, setName] = useState("");
	const [introduce, setIntroduce] = useState("");
	const [phoneNum, setPhoneNum] = useState("");

	return (
		<>
			<div className="initSet-progress-body">
				<h4>명함에 들어갈 정보를 입력해주세요!</h4>
				<div>
					<Inputs
						inputName="이름"
						inputValue={name}
						setInputValue={setName}
						inputPlaceholder="이름을 입력해주세요."
					/>
					<Inputs
						inputName="한줄 소개"
						inputValue={introduce}
						setInputValue={setIntroduce}
						inputPlaceholder="한줄 소개를 입력해주세요."
					/>
					<Inputs
						inputName="전화번호"
						inputValue={phoneNum}
						setInputValue={setPhoneNum}
						inputPlaceholder="전화번호를 입력해주세요."
					/>
				</div>
			</div>
			<div className="initSet-progress-footer justify-content-end">
				<Button onClick={gotoNextStage}>다음 단계</Button>
			</div>
		</>
	);
}

export default InitUserInfo;
