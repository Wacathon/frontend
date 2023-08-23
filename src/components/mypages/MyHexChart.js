import React, { useEffect, useState } from "react";
import HexChart from "../cards/HexChart";

import { Row, Col, Stack } from "react-bootstrap";
import { getMyIndicatorInfo } from "../hooks/useAxiosIndicator";

function MyHexChart() {
	const [indicatorInfo, setIndicatorData] = useState([]);

	useEffect(() => {
		getMyIndicatorInfo().then((data) =>
			setIndicatorData(
				data.map((item) => {
					return {
						tagId: item.tagId,
						tagName: item.tagName,
						avgTagScore: item.avrgTagScore,
					};
				})
			)
		);
	}, []);

	const renderLabels = () => {
		return indicatorInfo.map((item) => {
			return (
				<Row key={item.tagId}>
					<Col>{item.tagName}</Col>
					<Col>({item.avgTagScore})</Col>
				</Row>
			);
		});
	};

	return (
		<div className="myChart-wrapper">
			<Stack gap={4} className="d-flex justify-content-center">
				{renderLabels()}
			</Stack>
			<div className="myChart-chart-container">
				<HexChart />
			</div>
		</div>
	);
}

export default MyHexChart;
