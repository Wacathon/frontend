import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InitUserInfo from "./InitUserInfo";
import InitUserIndicator from "./InitUserIndicator";

import { Button, ProgressBar } from "react-bootstrap";
import InitUserHexChart from "./InitUserHexChart";

function InitProgress() {
	const navigate = useNavigate();
	const userId = useParams().userId;

	const [progressLevel, setProgressLevel] = useState(
		Number(useParams().progressLevel)
	);
	const [progressPercent, setProgressPercent] = useState(0);

	useEffect(() => {
		setProgressPercent(0);
		setProgressLevel(1);
		navigate(`/tag-setup/${userId}/progress/1`, { replace: true });
	}, []);

	const gotoNextStage = () => {
		if (progressLevel === 4 || progressPercent === 100) {
			navigate(`/tag-setup/${userId}/progress/result`);
		} else {
			setProgressLevel((prev) => prev + 1);
			setProgressPercent(parseInt((100 / 3) * progressLevel));
			navigate(`/tag-setup/${userId}/progress/${progressLevel + 1}`, {
				replace: true,
			});
		}
	};

	const gotoPrevStage = () => {
		if (progressLevel === 0 || progressPercent === 0) {
			window.location.reload("/");
			// window.location.replace("/");
		} else {
			setProgressLevel((prev) => prev - 1);
			setProgressPercent(parseInt((100 / 3) * (progressLevel - 2)));
			navigate(`/tag-setup/${userId}/progress/${progressLevel - 1}`, {
				replace: true,
			});
		}
	};

	const renderLevelComponent = () => {
		switch (progressLevel) {
			case 1:
				return <InitUserInfo />;
			case 2:
				return <InitUserIndicator />;
			case 3:
				return <InitUserHexChart />;
			case 4:
				return <h2>명함 완성!</h2>;
			default:
				return;
		}
	};

	return (
		<div>
			<ProgressBar
				className="mx-2"
				now={progressPercent}
				label={`${progressPercent}%`}
			/>
			<div className="initSet-container justify-content-start mt-3">
				<div className="initSet-progress-container">
					<div className="initSet-progress-body">
						{progressLevel !== 4 && <h2>{progressLevel}단계</h2>}
						{renderLevelComponent()}
					</div>
					<div className="initSet-progress-footer">
						{progressLevel !== 1 && (
							<Button onClick={gotoPrevStage}>이전 단계</Button>
						)}
						<Button onClick={gotoNextStage}>
							{progressLevel !== 4 ? "다음 단계" : "명함 보러가기"}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InitProgress;
