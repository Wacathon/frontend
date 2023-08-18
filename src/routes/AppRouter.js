import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "../pages/CardPage";
import Navigation from "./Navigation";
import MyPage from "../pages/MyPage";

function AppRouter() {
	return (
		<div className="d-flex justify-content-center">
			<Navigation />
			<div className="main-wrapper">
				<Routes>
					<Route path="/" element={<CardPage />} />
					<Route path="/mypage" element={<MyPage />} />
				</Routes>
			</div>
			<div className="blank-wrapper"></div>
		</div>
	);
}

export default AppRouter;
