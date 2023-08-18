import React from "react";
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
		data: 10,
	},
	{
		label: "커뮤니케이션",
		data: 30,
	},
	{
		label: "성실성",
		data: 90,
	},
	{
		label: "계획성",
		data: 50,
	},
	{
		label: "참여성",
		data: 70,
	},
	{
		label: "전문성",
		data: 40,
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
			// grid: {
			// 	display: false,
			// 	drawBorder: false, // 바깥선 그리기
			// },
			// angleLines: {
			// 	display: false,
			// },
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

function HexChart() {
	return (
		<div>
			<Radar data={data} options={options} />
		</div>
	);
}

export default HexChart;
