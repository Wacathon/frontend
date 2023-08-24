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
import axios from "axios";
import { Radar } from "react-chartjs-2";
import { getMyNamecardInfo } from "../hooks/useAxiosIndicator";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export const hexChart_dataset = [
	{
		label: "리더십",
		data: 100,
	},
	{
		label: "커뮤니케이션",
		data: 100,
	},
	{
		label: "성실성",
		data: 100,
	},
	{
		label: "참여성",
		data: 100,
	},
	{
		label: "열정",
		data: 100,
	},
	{
		label: "사교성",
		data: 100,
	},
];

export const data = {
	labels: hexChart_dataset.map((item) => item.label),
	datasets: [
		{
			label: "익명의 역량 지표",
			data: hexChart_dataset.map((item) => item.data),
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

function HexChart({ userId }) {
	// const userId = 3;
	const [userData, setUserData] = useState(data);

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");

		const headers = {
			"Content-type": "application/json; charset=UTF-8",
			Accept: "*/*",
			"X-AUTH-TOKEN": "Bearer " + accessToken,
		};

		getMyNamecardInfo(userId || 3)
			.then((res) => {
				const result = res.scoreList;
				const dataSet = result.map((item) => {
					return { label: item.tagName, data: item.tagScore };
				});
				const userScoreData = {
					labels: dataSet.map((item) => item.label),
					datasets: [
						{
							label: "익명의 역량 지표",
							data: dataSet.map((item) => item.data),
							backgroundColor: "rgba(255, 99, 132, 0.2)",
							borderColor: "rgba(255, 99, 132, 1)",
							borderWidth: 1,
						},
					],
				};
				setUserData(userScoreData);
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
