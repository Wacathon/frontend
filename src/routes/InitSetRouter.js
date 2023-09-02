import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import InitSetPage from "../pages/InitSetPage";
import InitProgress from "../components/initSet/InitProgress";
import NameCardPage from "../pages/NameCardPage";

import "../components/initSet/initSet.css";

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
		<div className="initSet-wrapper">
			{isMember ? (
				<Routes>
					<Route index element={<InitSetPage />} />
					<Route
						path="/:userId/progress/:progressLevel"
						element={<InitProgress />}
					/>
					<Route path="/:userId/progress/result" element={<NameCardPage />} />
					<Route path="/*" element={<InitSetPage />} />
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
