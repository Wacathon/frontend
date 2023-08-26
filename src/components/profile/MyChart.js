import React, { useEffect, useState } from "react";
import HexChart from "../charts/HexChart";

import { Row, Col, Stack, Button } from "react-bootstrap";
import { getMyIndicatorInfo } from "../../hooks/useAxiosIndicator";
import EditMyChart from "./EditMyChart";

function MyChart() {
	const [indicatorInfo, setIndicatorData] = useState([]);
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		getMyIndicatorInfo().then((data) =>
			setIndicatorData(
				data.map((item) => {
					return {
						tagId: item.tagId,
						tagName: item.tagName,
						avrgTagScore: Number(item.avrgTagScore).toFixed(1),
					};
				})
			)
		);
	}, []);

	const onEditClick = () => {
		setIsEdit((prev) => !prev);
	};

	const renderLabels = () => {
		return indicatorInfo.map((item) => {
			return (
				<Row key={item.tagId}>
					<Col>{item.tagName}</Col>
					<Col>({item.avrgTagScore})</Col>
				</Row>
			);
		});
	};

	return (
		<div className="myChart-wrapper">
			{isEdit ? (
				<EditMyChart setIsEdit={setIsEdit} />
			) : (
				<>
					<div className="d-flex flex-row p-2">
						<Stack gap={4} className="d-flex justify-content-center">
							{renderLabels()}
						</Stack>
						<div className="myChart-chart-container">
							<HexChart />
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<Button onClick={onEditClick}>수정하기</Button>
					</div>
				</>
			)}
		</div>
	);
}

export default MyChart;
