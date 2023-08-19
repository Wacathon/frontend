import React, { useState, useEffect } from "react";
import HexChart from "../components/cards/HexChart";
import axios from "axios";
import { useParams } from "react-router-dom";
import { hexChart_dataset } from "../components/cards/HexChart";

import { Container, Row, Col, Stack } from "react-bootstrap";
import "../components/cards/cards.css";

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

const options = {
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

export const initData = {
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

function MyCardPage() {
	const userId = useParams();
	const [userInfo, setUserInfo] = useState({});
	const [chartData, setChartData] = useState(initData);

	useEffect(() => {
		axios
			.get(`http://43.202.59.248:8080/api/indicator/${userId.userId}`)
			.then((res) => {
				const result = res.data.response;
				const hexChart_dataset = result.scoreList;
				const dataSet = hexChart_dataset.map((item) => {
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
				setChartData(userScoreData);
				setUserInfo(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Container
			fluid
			className="d-flex flex-column justify-content-center align-items-center formPage-wrapper back-white"
		>
			<Row>
				<Col>
					<h4 className="cardPage-user-card-title">
						📇 {userInfo.userName}님의 명함
					</h4>
				</Col>
			</Row>
			<Row>
				<Col className="userCard-max-width">
					<div className="user-card-container">
						<Row>
							<Col className="d-flex justify-content-center align-items-center">
								<Stack className="max-width-200">
									<h5>{userInfo.introduce}</h5>
									<h1>{userInfo.userName}</h1>
									<h6>Phone: {userInfo.phoneNum}</h6>
									<h6>Email: {userInfo.email}</h6>
								</Stack>
							</Col>
							<Col className="d-flex justify-content-center align-items-center">
								<div>
									<Radar data={chartData} options={options} />
								</div>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default MyCardPage;
