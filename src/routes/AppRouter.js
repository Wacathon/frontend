import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "../pages/CardPage";
import Navigation from "./Navigation";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import LinkPage from "../pages/LinkPage";

import "./route.css";
<<<<<<< HEAD
import LinkPage from "../pages/LinkPage";
import FeedbackFormPage from "../pages/FeedbackFormPage";
=======
>>>>>>> e851c461ef7470ac945f0e0f2868821eee5bfc09

function AppRouter({ isLoggedIn }) {
	return (
<<<<<<< HEAD
		<>
			{isLoggedIn ? (
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
			) : (
				<div className="d-flex justify-content-center">
					<div className="guest-main-wrapper">
						<Routes>
							{/* <Route path="/" element={<LoginPage />} /> */}
							<Route path="/" element={<FeedbackFormPage />} />
							{/* <Route path="/feedback-form" element={<FeedbackFormPage />} /> */}
							<Route path="/share-link" element={<LinkPage />} />
						</Routes>
					</div>
				</div>
			)}
		</>
=======
		<div className="d-flex flex-row">
			<div className="nav-wrapper">
				<Navigation />
			</div>
			<div className="main-wrapper">
				<Routes>
					<Route path="/" element={<CardPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="/share-link" element={<LinkPage />} />
				</Routes>
			</div>
		</div>
>>>>>>> e851c461ef7470ac945f0e0f2868821eee5bfc09
	);
}

export default AppRouter;
