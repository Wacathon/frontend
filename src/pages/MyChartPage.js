import React from "react";
import MyChart from "../components/charts/MyChart";

function MyChartPage() {
	return (
		<div className="wrapper">
			<div className="">
				<h5 className="myPage-container-title">나를 표현하는 육각형</h5>
				<MyChart />
			</div>
		</div>
	);
}

export default MyChartPage;
