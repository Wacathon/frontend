import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CardPage from "../pages/CardPage";
import Navigation from "./Navigation";
import ProfilePage from "../pages/ProfilePage";
import AuthPage from "../pages/AuthPage";
import LinkPage from "../pages/LinkPage";
import FeedbackFormPage from "../pages/FeedbackFormPage";
import ResultPage from "../pages/ResultPage";
import NameCardPage from "../pages/NameCardPage";
import InitSetRouter from "./InitSetRouter";

import "./route.css";
import { Button } from "react-bootstrap";

function AppRouter() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem("accessToken") ? true : false
	);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<>
			{isLoggedIn ? (
				<>
					<Navigation />
					<main className="main-wrapper">
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/name-card/:userId" element={<CardPage />} />
							<Route path="/profile" element={<ProfilePage />} />
							<Route path="/share-link" element={<LinkPage />} />
							<Route path="/*" element={<MainPage />} />
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
							<Route path="/" element={<MainPage />} />
							<Route path="/login" element={<AuthPage />} />
							<Route path="/signup" element={<AuthPage />} />
							<Route path="/tag-setup/*" element={<InitSetRouter />} />
							<Route
								path="/feedback-form/:userId"
								element={<FeedbackFormPage />}
							/>
							<Route
								path="/feedback-form/:userId/result"
								element={<ResultPage />}
							/>
							<Route path="/card/:userId" element={<NameCardPage />} />
							<Route path="/*" element={<MainPage />} />
						</Routes>
					</div>
				</div>
			)}
		</>
	);
}

export default AppRouter;
