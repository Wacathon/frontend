import React, { useState, useEffect } from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { getMyNameCardInfo } from "../../hooks/useAxiosIndicator";
import { testUserChartData } from "../../testData";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export const initLabel = [
	{
		label: "",
		data: 0,
	},
	{
		label: "",
		data: 0,
	},
	{
		label: "",
		data: 0,
	},
	{
		label: "",
		data: 0,
	},
	{
		label: "",
		data: 0,
	},
	{
		label: "",
		data: 0,
	},
];

export const initData = {
	labels: initLabel.map((item) => item.label),
	datasets: [
		{
			label: "익명의 역량 지표",
			data: initLabel.map((item) => item.data),
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgba(255, 99, 132, 1)",
			borderWidth: 1,
		},
	],
};

export const options = {
	responsive: true,
	scales: {
		r: {
			suggestedMin: 0,
			suggestedMax: 100,
			angleLines: {
				display: false,
			},
			pointLabels: {
				// display: false,
			},
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

export const setHexChartData = (tagList) => {
	const dataSet = tagList.map((item) => {
		return { label: item.tagName, data: item.tagScore || item.avrgTagScore };
	});
	const chartData = {
		labels: dataSet.map((item) => item.label),
		datasets: [
			{
				data: dataSet.map((item) => item.data),
				backgroundColor: "rgba(0, 0, 77, 0.4)",
				borderColor: "rgba(0, 0, 77, 1)",
				borderWidth: 2,
				pointStyle: false,
			},
		],
	};
	return chartData;
};

function HexChart({ userId }) {
	const [userData, setUserData] = useState(initData);

	useEffect(() => {
		// axios
		// getMyNameCardInfo(userId)
		// 	.then((res) => {
		// 		const newChartData = setHexChartData(res.scoreList);
		// 		setUserData(newChartData);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		// test data
		const dataSet = testUserChartData
			.filter((el) => el.isSelected === true)
			.map((item) => {
				return { label: item.tagName, data: item.avrgTagScore };
			});
		const chartData = {
			labels: dataSet.map((item) => item.label),
			datasets: [
				{
					data: dataSet.map((item) => item.data),
					backgroundColor: "rgba(0, 0, 77, 0.4)",
					borderColor: "rgba(0, 0, 77, 1)",
					borderWidth: 2,
					pointStyle: false,
				},
			],
		};
		setUserData(chartData);
	}, []);

	return (
		<div>
			<Radar data={userData} options={options} />
		</div>
	);
}

export default HexChart;
