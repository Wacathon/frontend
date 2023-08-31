import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Card, InputGroup, Form, Button } from "react-bootstrap";
import "./linkpage.css";

function LinkPage() {
	const [userId, setUserId] = useState(3);
	const [userName, setUserName] = useState("");
	const url = "http://localhost:3000";
	const feedbackUrlRef = useRef();

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");

		const headers = {
			"Content-type": "application/json; charset=UTF-8",
			Accept: "*/*",
			"X-AUTH-TOKEN": "Bearer " + accessToken,
		};

		axios
			.get("http://43.202.59.248:8080/api/member/myProfile", { headers })
			.then((res) => {
				const result = res.data.response;
				setUserName(result.name);
			})
			.catch((err) => {
				console.log(err);
			});
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
								value={`${url}/feedback-form/${userId}`}
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
