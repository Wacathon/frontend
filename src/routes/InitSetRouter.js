import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import InitSetPage from "../pages/InitSetPage";
import InitProgress from "../components/init_set/InitProgress";

function InitSetRouter() {
	// const [isMember, setIsMember] = useState(false);
	const [isMember, setIsMember] = useState(true);

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			setIsMember(true);
		}
	}, []);

	return (
		<div>
			{isMember ? (
				<Routes>
					<Route index element={<InitSetPage />} />
					<Route path="progress/:progressLevel" element={<InitProgress />} />
				</Routes>
			) : (
				<div>
					<h2>잘못된 접근입니다!</h2>
				</div>
			)}
		</div>
	);
}

export default InitSetRouter;
