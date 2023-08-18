import React from "react";
import HexChart, { hexChart_dataset } from "../cards/HexChart";

import { Row, Col, Stack } from "react-bootstrap";

function MyHexChart() {
	const renderLabels = () => {
		return hexChart_dataset.map((item, idx) => {
			return (
				<Row key={idx}>
					<Col>{item.label}</Col>
					<Col>({item.data})</Col>
				</Row>
			);
		});
	};

	return (
		<div className="d-flex flex-row">
			<Stack
				gap={4}
				// style={{ minWidth: "300px" }}
				className="d-flex justify-content-center"
			>
				{renderLabels()}
			</Stack>
			<div>
				<HexChart />
			</div>
		</div>
	);
}

export default MyHexChart;
