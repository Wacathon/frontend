import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllTags } from "../../hooks/useAxiosTags";
import { getMyIndicatorInfo } from "../../hooks/useAxiosIndicator";
import HexChart from "../charts/HexChart";

import { Form, Stack } from "react-bootstrap";

function EditMyChart() {
	const [tagList, setTagList] = useState([]);
	const [myTagList, setMyTagList] = useState([]);

	useEffect(() => {
		axios.all([getMyIndicatorInfo(), getAllTags()]).then(
			axios.spread((res1, res2) => {
				const indicatorData = res1.map((item) => {
					return {
						tagId: item.tagId,
						tagName: item.tagName,
						avrgTagScore: Number(item.avrgTagScore).toFixed(1),
					};
				});
				setMyTagList(indicatorData);
				const tagData = res2.map((item) => {
					const matchedIdx = indicatorData.findIndex(
						(el) => el.tagId === item.tagId
					);
					return {
						tagId: item.tagId,
						tagName: item.tagName,
						avrgTagScore: indicatorData[matchedIdx]
							? indicatorData[matchedIdx].avrgTagScore
							: 0,
						isChecked: indicatorData[matchedIdx] ? true : false,
					};
				});
				setTagList(tagData);
			})
		);
	}, []);

	const renderTagList = () => {
		return tagList.map((item) => {
			return (
				<div key={item.tagId}>
					<Form.Check
						type="checkbox"
						id={"tag" + item.tagId}
						label={`${item.tagName} (${item.avrgTagScore})`}
						checked={item.isChecked || false}
						onChange={(e) => {
							const tagIdx = tagList.findIndex(
								({ tagId }) => tagId === item.tagId
							);
							// if (myTagList.find((el) => el.tagId === item.tagId)) {
							setTagList([
								...tagList.slice(0, tagIdx),
								{ ...tagList[tagIdx], isChecked: e.target.checked },
								...tagList.slice(tagIdx + 1, tagList.length),
							]);
							// }
							console.log(item.isChecked);
						}}
					/>
				</div>
			);
		});
	};

	const renderMyTagList = () => {
		return myTagList.map((item) => {
			return (
				<div key={item.tagId}>
					{item.tagName} : {item.avrgTagScore}
				</div>
			);
		});
	};

	return (
		<div className="d-flex flex-row p-2">
			<Stack gap={2}>{renderTagList()}</Stack>
			<div className="d-flex flex-column">
				<Stack gap={2}>{renderMyTagList()}</Stack>
				<HexChart />
			</div>
		</div>
	);
}

export default EditMyChart;
