import React, { useState, useEffect, useRef } from "react";
import { getUserProfile } from "../hooks/useAxiosAuth";
import { Card, InputGroup, Form, Button } from "react-bootstrap";
import { testUserInfo } from "../testData";

import "./linkpage.css";

function LinkPage() {
	const [userId, setUserId] = useState(0);
	const [userName, setUserName] = useState("");
	const feedbackUrlRef = useRef();

	useEffect(() => {
		// axios
		// getUserProfile()
		// 	.then((res) => {
		// 		setUserId(res.memberId);
		// 		setUserName(res.name);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		// test data
		setUserId(testUserInfo.memberId);
		setUserName(testUserInfo.name);
	}, []);

	const onShareClick = () => {
		feedbackUrlRef.current.focus();
		feedbackUrlRef.current.select();
		navigator.clipboard.writeText(feedbackUrlRef.current.value).then(() => {
			alert("링크가 복사되었습니다!");
		});
	};

	return (
		<div className="wrapper">
			<div className="mb-2 ps-2">
				<h4>{userName} 님의 피드백 링크</h4>
			</div>
			<div className="link-card-container">
				<Card>
					<Card.Body>
						<InputGroup>
							<Form.Control
								type="text"
								readOnly
								ref={feedbackUrlRef}
								value={`${process.env.REACT_APP_BASE_URL}/feedback-form/${userId}`}
							/>
							<Button variant="secondary" onClick={onShareClick}>
								링크 복사
							</Button>
						</InputGroup>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default LinkPage;
