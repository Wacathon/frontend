import React from "react";
import { Button, Stack } from "react-bootstrap";
import HexChart from "../charts/HexChart";
import { useParams } from "react-router-dom";
import Inputs from "../../hooks/useInputs";

export const my_tag_data = [
	{
		tagId: 1,
		tagName: "리더십",
	},
	{
		tagId: 2,
		tagName: "커뮤니케이션",
	},
	{
		tagId: 3,
		tagName: "성실성",
	},
	{
		tagId: 4,
		tagName: "계획성",
	},
	{
		tagId: 5,
		tagName: "참여성",
	},
	{
		tagId: 6,
		tagName: "전문성",
	},
];

function InitUserHexChart({ gotoNextStage, gotoPrevStage }) {
	const userId = useParams().userId;

	const renderMyTags = () => {
		return my_tag_data.map((item) => {
			return (
				<div key={item.tagId}>
					<Inputs
						inputName={item.tagName}
						inputType="number"
						inputPlaceholder="점수를 입력해주세요"
					/>
				</div>
			);
		});
	};

	return (
		<>
			<div className="initSet-progress-body">
				<h4>내 강점들을 0 - 100 사이의 점수로 입력해주세요!</h4>
				<div className="d-flex mt-2 mb-50px">
					<Stack gap={2}>{renderMyTags()}</Stack>
					<HexChart userId={userId} />
				</div>
			</div>
			<div className="initSet-progress-footer">
				<Button onClick={gotoPrevStage}>이전 단계</Button>
				<Button onClick={gotoNextStage}>다음 단계</Button>
			</div>
		</>
	);
}

export default InitUserHexChart;
