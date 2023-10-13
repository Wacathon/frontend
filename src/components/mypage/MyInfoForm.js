import React, { useState, useEffect } from "react";
import Inputs from "../../hooks/useInputs";
import { getUserProfile, updateUserInfo } from "../../hooks/useAxiosAuth";
import { testUserInfo } from "../../testData";

import profileImg from "./profile.png";

function MyInfoForm() {
	const [isEdit, setIsEdit] = useState(false);
	const [name, setName] = useState("");
	const [phoneNum, setPhoneNum] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		// axios
		// getUserProfile().then((data) => {
		// 	setName(data.name);
		// 	setIntroduce(data.introduce);
		// 	setEmail(data.email);
		// 	setPhoneNum(data.phoneNum);
		// });

		// test data
		setName(testUserInfo.name);
		setEmail(testUserInfo.email);
		setPhoneNum(testUserInfo.phoneNum);
	}, []);

	const toggleEdit = () => {
		setIsEdit((prev) => !prev);
	};

	const onEditClick = async () => {
		// if (name === "" || email === "" || introduce === "" || phoneNum === "") {
		// 	alert("정보를 입력해주세요!");
		// 	return;
		// }
		// updateUserInfo(email, true, true, true, phoneNum).then((res) => {
		// 	if (res) {
		// 		alert("정보가 수정되었습니다!");
		// 		window.location.reload();
		// 	}
		// });
		// setIsEdit(true);

		if (name === "" || email === "" || phoneNum === "") {
			alert("정보를 입력해주세요!");
			return;
		}
		alert("정보가 수정되었습니다!");
		window.location.reload();
		setIsEdit(true);
	};

	return (
		<div className="">
			<>
				{isEdit ? (
					<div className="my-info-0">
						<img
							alt="user-profile-img"
							src={profileImg}
							className="my-info-profile-img"
						/>
						<div className="my-info-edit-0">
							<div>
								<Inputs
									inputName="이름"
									inputValue={name}
									setInputValue={setName}
									inputPlaceholder="이름을 입력해주세요"
								/>
							</div>
							<div>
								<Inputs
									inputName="연락처"
									inputValue={phoneNum}
									setInputValue={setPhoneNum}
									inputPlaceholder="연락처를 입력해주세요"
								/>
							</div>
							<div>
								<Inputs
									inputName="이메일"
									inputValue={email}
									setInputValue={setEmail}
									inputPlaceholder="이메일을 입력해주세요"
								/>
							</div>
						</div>
					</div>
				) : (
					<div className="my-info-0">
						<img
							alt="user-profile-img"
							src={profileImg}
							className="my-info-profile-img"
						/>
						<div className="my-info-infos">
							<div className="my-info-infos-text">
								<span>이름:</span>
								<span>{name}</span>
							</div>
							<div className="my-info-infos-text">
								<span>이메일:</span>
								<span>{email}</span>
							</div>
							<div className="my-info-infos-text">
								<span>연락처:</span>
								<span>{phoneNum}</span>
							</div>
						</div>
					</div>
				)}
			</>
			<div className="my-page-btn-box">
				{isEdit ? (
					<>
						<button onClick={toggleEdit} className="my-page-btn cancel-btn">
							취소
						</button>
						<button onClick={onEditClick} className="my-page-btn primary-btn">
							수정 완료
						</button>
					</>
				) : (
					<button onClick={toggleEdit} className="my-page-btn primary-btn">
						수정
					</button>
				)}
			</div>
		</div>
	);
}

export default MyInfoForm;
