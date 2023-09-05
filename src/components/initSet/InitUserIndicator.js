import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getAllTags } from "../../hooks/useAxiosTags";
import {
	getMyIndicatorInfo,
	setMyIndicators,
} from "../../hooks/useAxiosIndicator";

import { Form, Stack, DropdownButton, Button } from "react-bootstrap";

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

function InitUserIndicator() {
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
			return <div key={item.tagId}>{item.tagName}</div>;
		});
	};

	const renderDropdownItems = () => {
		return tagList.map((item) => {
			return (
				<div key={item.tagId} className="tag-dropdown-item">
					<Form.Check
						type="checkbox"
						id={item.tagId}
						label={`${item.tagName}`}
						onChange={() => onTagSelect(item)}
					/>
				</div>
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
		<div>
			<h2>InitUserIndicator</h2>
			<div>
				<h5>나만의 강점 태그 선택 (6개 선택 필수)</h5>
				<div className="d-flex flex-row justify-content-between p-2">
					<DropdownButton title="태그 선택" autoClose="outside">
						{renderDropdownItems()}
					</DropdownButton>
					<Stack gap={2} className="mx-4">
						{renderMyTagList()}
					</Stack>
				</div>
				<div className="d-flex justify-content-end">
					<Button onClick={setInitTags}>태그 선택 완료</Button>
				</div>
			</div>
		</div>
	);
}

export default InitUserIndicator;
