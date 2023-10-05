import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NameCardPage from "../pages/NameCardPage";
import Navigation from "./Navigation";
import MyPage from "../pages/MyPage";
import MyFeedbackPage from "../pages/MyFeedbackPage";
import MyChartPage from "../pages/MyChartPage";
import AuthPage from "../pages/AuthPage";
import LinkPage from "../pages/LinkPage";
import FeedbackFormPage from "../pages/FeedbackFormPage";
import ResultPage from "../pages/ResultPage";
import PublicNameCardPage from "../pages/PublicNameCardPage";
import InitSetRouter from "./InitSetRouter";
import useDebounce from "../hooks/useDebounce";

import "./route.css";
import Navbar from "./Navbar";

function AppRouter() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem("accessToken") ? true : false
	);
	const [isPcWidth, setIsPcWidth] = useState(true);
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const debouncedPcWidth = useDebounce(isPcWidth, 500);

	const handleResize = () => {
		if (window.innerWidth > 1024) {
			setIsPcWidth(true);
		} else {
			setIsPcWidth(false);
		}
	};

	const showMenu = () => {
		setIsMenuOpened((prev) => !prev);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			setIsLoggedIn(true);
		}

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{isLoggedIn ? (
				<>
					{!isPcWidth && <Navbar />}
					<div className="router-0">
						{isPcWidth && (
							<aside className="router-nav-0">
								<Navigation />
							</aside>
						)}
						<main className="router-main-0">
							<div className="router-main-1-routes">
								<Routes>
									<Route path="/" element={<NameCardPage />} />
									<Route path="/name-card" element={<NameCardPage />} />
									<Route path="/my-page" element={<MyPage />} />
									<Route path="/my-chart" element={<MyChartPage />} />
									<Route path="/my-feedback" element={<MyFeedbackPage />} />
									<Route path="/share-link" element={<LinkPage />} />
									<Route path="/*" element={<NameCardPage />} />
								</Routes>
							</div>
							{/* <div className="router-main-1-blank"></div> */}
						</main>
						<button className="scrollTop-btn" onClick={scrollToTop}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
							>
								<circle cx="18" cy="18" r="18" fill="#00004D" />
								<path d="M18 14L23.1962 20H12.8038L18 14Z" fill="white" />
							</svg>
						</button>
					</div>
				</>
			) : (
				<div className="router-1">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/auth/:signMethod" element={<AuthPage />} />
						<Route path="/tag-setup/*" element={<InitSetRouter />} />
						<Route
							path="/feedback-form/:userId"
							element={<FeedbackFormPage />}
						/>
						<Route
							path="/feedback-form/:userId/result"
							element={<ResultPage />}
						/>
						<Route path="/card/:userId" element={<PublicNameCardPage />} />
						<Route path="/*" element={<MainPage />} />
					</Routes>
				</div>
			)}
		</>
	);
}

export default AppRouter;
