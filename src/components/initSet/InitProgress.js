import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InitUserInfo from "./InitUserInfo";
import InitUserIndicator from "./InitUserIndicator";

import { ProgressBar } from "react-bootstrap";
import InitUserChartData from "./InitUserChartData";
import InitProgressComplete from "./InitProgressComplete";

function InitProgress() {
	const navigate = useNavigate();
	const userId = useParams().userId;

	const [progressLevel, setProgressLevel] = useState(
		Number(useParams().progressLevel)
	);
	const [progressPercent, setProgressPercent] = useState(0);
	const [progressLabel, setProgressLabel] = useState("");

	useEffect(() => {
		setProgressLevel(1);
		setProgressPercent(0);
		setProgressLabel(`${progressLevel}단계`);
		navigate(`/tag-setup/${userId}/progress/1`, { replace: true });
	}, []);

	const gotoNextStage = () => {
		if (progressLevel === 4 || progressPercent === 100) {
			navigate(`/tag-setup/${userId}/progress/result`, { replace: true });
		} else {
			setProgressLevel((prev) => prev + 1);
			setProgressPercent(parseInt((100 / 3) * progressLevel));
			setProgressLabel(`${progressLevel + 1}단계`);
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
			setProgressLabel(`${progressLevel - 1}단계`);
			navigate(`/tag-setup/${userId}/progress/${progressLevel - 1}`, {
				replace: true,
			});
		}
	};

	const renderLevelComponent = () => {
		switch (progressLevel) {
			case 1:
				return <InitUserInfo gotoNextStage={gotoNextStage} />;
			case 2:
				return (
					<InitUserIndicator
						gotoNextStage={gotoNextStage}
						gotoPrevStage={gotoPrevStage}
					/>
				);
			case 3:
				return (
					<InitUserChartData
						gotoNextStage={gotoNextStage}
						gotoPrevStage={gotoPrevStage}
					/>
				);
			case 4:
				return (
					<InitProgressComplete
						gotoNextStage={gotoNextStage}
						gotoPrevStage={gotoPrevStage}
					/>
				);
			default:
				return <InitUserInfo gotoNextStage={gotoNextStage} />;
		}
	};

	return (
		<div>
			<h3 className="mx-2">{progressLabel}</h3>
			<ProgressBar
				className="mx-2"
				now={progressPercent}
				label={`${progressPercent}%`}
			/>
			<div className="initSet-progress-container">{renderLevelComponent()}</div>
		</div>
	);
}

export default InitProgress;
