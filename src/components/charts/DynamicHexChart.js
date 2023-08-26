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

function DynamicHexChart({ chartData }) {
	return (
		<div>
			<Radar data={chartData} options={options} />
		</div>
	);
}

export default DynamicHexChart;
