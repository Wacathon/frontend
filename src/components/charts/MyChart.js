import React, { useEffect, useState } from "react";
import { initData, setHexChartData } from "./HexChart";
import { getMyIndicatorInfo } from "../../hooks/useAxiosIndicator";
import EditMyChart from "./EditMyChart";
import DynamicHexChart from "./DynamicHexChart";

import { Row, Col, Stack, Button } from "react-bootstrap";
import { testUserChartData } from "../../testData";

function MyChart() {
	const [indicatorInfo, setIndicatorData] = useState([]);
	const [chartData, setChartData] = useState(initData);
	const [isEdit, setIsEdit] = useState(false);
	const [isEdited, setIsEdited] = useState(false);

	useEffect(() => {
		// axios
		// getMyIndicatorInfo().then((data) => {
		// 	setIndicatorData(
		// 		data.map((item) => {
		// 			return {
		// 				tagId: item.tagId,
		// 				tagName: item.tagName,
		// 				avrgTagScore: Number(item.avrgTagScore).toFixed(1),
		// 			};
		// 		})
		// 	);
		// 	const newChartData = setHexChartData(data);
		// 	setChartData(newChartData);
		// });

		// test data
		const userChartData = testUserChartData.filter(
			(el) => el.isSelected === true
		);
		const hexChartData = setHexChartData(userChartData);
		setIndicatorData(userChartData);
		setChartData(hexChartData);

		setIsEdited(false);
	}, [isEdited]);

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
				<EditMyChart setIsEdit={setIsEdit} setIsEdited={setIsEdited} />
			) : (
				<>
					<div className="d-flex flex-row p-2">
						<Stack gap={4} className="d-flex justify-content-center">
							{renderLabels()}
						</Stack>
						<div className="myChart-chart-container">
							<DynamicHexChart chartData={chartData} />
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
