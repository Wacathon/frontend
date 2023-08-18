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

export const data = {
	labels: ["리더십", "커뮤니케이션", "성실성", "계획성", "참여성", "전문성"],
	datasets: [
		{
			label: `익명의 역량 지표`,
			data: [10, 30, 90, 50, 70, 40],
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
