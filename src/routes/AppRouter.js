import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "../pages/CardPage";
import Navigation from "./Navigation";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import LinkPage from "../pages/LinkPage";

import "./route.css";
import FeedbackFormPage from "../pages/FeedbackFormPage";
import ResultPage from "../pages/ResultPage";
import MyCardPage from "../pages/MyCardPage";
import { Button } from "react-bootstrap";

function AppRouter({ isLoggedIn }) {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{isLoggedIn ? (
				<>
					<Navigation />
					<main className="main-wrapper">
						<Routes>
							<Route path="/" element={<CardPage />} />
							{/* <Route path="/:userId" element={<CardPage />} /> */}
							<Route path="/mypage" element={<MyPage />} />
							<Route path="/share-link" element={<LinkPage />} />
						</Routes>
					</main>
					<aside className="empty-wrapper"></aside>
					<Button
						variant="secondary"
						onClick={scrollToTop}
						className="scrollTop-btn"
					>
						▵
					</Button>
				</>
			) : (
				<div className="d-flex justify-content-center">
					<div className="guest-main-wrapper">
						<Routes>
							<Route path="/" element={<LoginPage />} />
							<Route path="/login" element={<LoginPage />} />
							<Route
								path="/feedback-form/:userId"
								element={<FeedbackFormPage />}
							/>
							<Route
								path="/feedback-form/:userId/result"
								element={<ResultPage />}
							/>
							<Route path="/card/:userId" element={<MyCardPage />} />
							<Route path="/*" element={<LoginPage />} />
						</Routes>
					</div>
				</div>
			)}
		</>
	);
}

export default AppRouter;
