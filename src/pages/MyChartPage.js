import React from "react";
import MyChart from "../components/charts/MyChart";
import { Button } from "react-bootstrap";

function MyChartPage() {
	return (
		<div className="wrapper">
			<div className="myPage-container">
				<div className="p-2">
					<h5 className="myPage-container-title">💙 나를 표현하는 육각형</h5>
					<MyChart />
				</div>
			</div>
		</div>
	);
}

export default MyChartPage;
