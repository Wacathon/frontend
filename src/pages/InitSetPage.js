import React, { useEffect, useState } from "react";
import axios from "axios";
import TagList from "../components/tags/TagList";
import { getAllTags } from "../hooks/useAxiosTags";
import {
	getMyIndicatorInfo,
	setMyIndicators,
} from "../hooks/useAxiosIndicator";

import {
	Row,
	Col,
	Form,
	Stack,
	DropdownButton,
	Button,
	ProgressBar,
} from "react-bootstrap";
import { InputNumber, Slider } from "antd";
import { useNavigate } from "react-router-dom";

function InitSetPage() {
	const navigate = useNavigate();

	const gotoNextStage = () => {
		navigate("/tag-setup/progress/1");
	};

	return (
		<div className="wrapper">
			<h5>나만의 명함 만들기</h5>
			<Button onClick={gotoNextStage}>시작하기</Button>
		</div>
	);
}

export default InitSetPage;
