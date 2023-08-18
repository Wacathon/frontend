import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "../pages/CardPage";
import Navigation from "./Navigation";
import MyPage from "../pages/MyPage";

import "./route.css";
import LinkPage from "../pages/LinkPage";

function AppRouter() {
	return (
		<div className="d-flex flex-row">
			<div className="nav-wrapper">
				<Navigation />
			</div>
			<div className="main-wrapper">
				<Routes>
					<Route path="/" element={<CardPage />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="/share-link" element={<LinkPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default AppRouter;
