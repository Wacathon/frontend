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
import { getMyNamecardInfo } from "../../hooks/useAxiosIndicator";

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
		return { label: item.tagName, data: item.avrgTagScore };
	});
	const chartData = {
		labels: dataSet.map((item) => item.label),
		datasets: [
			{
				data: dataSet.map((item) => item.data),
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
		],
	};
	return chartData;
};

function HexChart({ userId }) {
	// const userId = 3;
	const [userData, setUserData] = useState(initData);

	useEffect(() => {
		getMyNamecardInfo(userId || 3)
			.then((res) => {
				const result = res.scoreList;
				const newChartData = setHexChartData(result);
				setUserData(newChartData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<Radar data={userData} options={options} />
		</div>
	);
}

export default HexChart;
