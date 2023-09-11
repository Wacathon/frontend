import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getAllTags } from "../../hooks/useAxiosTags";
import {
	getMyIndicatorInfo,
	setMyIndicators,
} from "../../hooks/useAxiosIndicator";

import { Button, ToggleButton } from "react-bootstrap";

export const tag_data = [
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
	{
		tagId: 7,
		tagName: "섬세함",
	},
	{
		tagId: 8,
		tagName: "열정",
	},
	{
		tagId: 9,
		tagName: "이타성",
	},
	{
		tagId: 10,
		tagName: "사교성",
	},
	{
		tagId: 11,
		tagName: "자기주도적",
	},
];

function InitUserIndicator({ gotoNextStage, gotoPrevStage }) {
	const userId = useParams().userId;

	const [tagCnt, setTagCnt] = useState(0);
	const [tagList, setTagList] = useState([]);
	const [myTagList, setMyTagList] = useState([]);

	const setTagData = () => {
		const tagData = tag_data.map((item, idx) => {
			return {
				...item,
				idx,
				isChecked: false,
			};
		});
		setTagList(tagData);
		// axios.all([getMyIndicatorInfo(), getAllTags()]).then(
		// 	axios.spread((res1, res2) => {
		// 		const indicatorData = res1.map((item) => {
		// 			return {
		// 				tagId: item.tagId,
		// 				tagName: item.tagName,
		// 			};
		// 		});
		// 		setMyTagList(indicatorData);
		// 		const tagData = res2.map((item, idx) => {
		// 			const matchedIdx = indicatorData.findIndex(
		// 				(el) => el.tagId === item.tagId
		// 			);
		// 			if (indicatorData[matchedIdx]) {
		// 				setTagCnt((prev) => prev + 1);
		// 			}
		// 			return {
		// 				idx,
		// 				tagId: item.tagId,
		// 				tagName: item.tagName,
		// 				isChecked: indicatorData[matchedIdx] ? true : false,
		// 			};
		// 		});
		// 		setTagList(tagData);
		// 	})
		// );
	};

	const onTagSelect = (item) => {
		if (item.isChecked) {
			setTagCnt((prev) => prev - 1);
		} else {
			if (tagCnt >= 6) {
				alert("태그는 6개만 선택할 수 있습니다!");
				return;
			}
			setTagCnt((prev) => prev + 1);
		}
		const newTagList = [
			...tagList.slice(0, item.idx),
			{ ...tagList[item.idx], isChecked: !item.isChecked },
			...tagList.slice(item.idx + 1, tagList.length),
		];
		setTagList(newTagList);
		const filteredNewTagList = newTagList.filter((item) => item.isChecked);
		setMyTagList(filteredNewTagList);
	};

	const renderMyTagList = () => {
		return myTagList.map((item) => {
			return (
				<div key={item.tagId} className="px-1">
					{item.tagName}
				</div>
			);
		});
	};

	const renderTags = () => {
		return tagList.map((item) => {
			return (
				<ToggleButton
					key={item.tagId}
					id={item.tagId}
					type="checkbox"
					className="m-2"
					variant="outline-primary"
					checked={item.isChecked}
					onChange={() => onTagSelect(item)}
				>
					{item.tagName}
				</ToggleButton>
			);
		});
	};

	const setInitTags = () => {
		if (tagCnt !== 6) {
			alert("태그 6개를 모두 선택해주세요!");
			return;
		}
		const tagList = myTagList.map((item) => {
			return {
				tagId: item.tagId,
			};
		});
		if (window.confirm("태그 정보를 수정하시겠습니까?")) {
			setMyIndicators(tagList, userId).then((res) => {
				if (res) {
					setTagData();
					alert("태그 정보가 수정되었습니다.");
				} else {
					alert("태그 정보 수정에 실패하였습니다.");
				}
			});
			console.log(tagList);
		} else {
			return;
		}
	};

	useEffect(() => {
		setTagData();
	}, []);

	return (
		<>
			<div className="initSet-progress-body">
				<h4>나의 강점들을 선택해주세요!</h4>
				<h6>(6개 선택 필수)</h6>
				<div className="initSet-progress-indicator-tags">
					<div className="mt-2 mb-2">{renderTags()}</div>
					<h6>내가 선택한 태그들 ({tagCnt}/6) :</h6>
					<div className="d-flex flex-row">{renderMyTagList()}</div>
				</div>
			</div>
			<div className="initSet-progress-footer">
				<Button onClick={gotoPrevStage}>이전 단계</Button>
				<Button onClick={gotoNextStage}>다음 단계</Button>
			</div>
		</>
	);
}

export default InitUserIndicator;
