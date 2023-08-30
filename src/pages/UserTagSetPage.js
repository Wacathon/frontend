import React, { useEffect, useState } from "react";
import TagList from "../components/tags/TagList";
import { getMyIndicatorInfo } from "../hooks/useAxiosIndicator";
import { Button } from "react-bootstrap";

function UserTagSetPage() {
	const [isMember, setIsMember] = useState(false);

	const gotoMainPage = () => {
		window.location.replace(process.env.REACT_APP_BASE_URL);
	};

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			setIsMember(true);
		}

		getMyIndicatorInfo().then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<div>
			{isMember ? (
				<div>
					<h2>태그 설정하기</h2>
					<TagList />
					<Button onClick={gotoMainPage}>설정완료!</Button>
				</div>
			) : (
				<div>
					<h2>잘못된 접근입니다!</h2>
				</div>
			)}
		</div>
	);
}

export default UserTagSetPage;
