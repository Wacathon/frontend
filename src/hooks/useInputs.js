import React from "react";

function Inputs({
	inputName,
	inputType,
	inputValue,
	setInputValue,
	inputPlaceholder,
}) {
	const onTextChange = (e) => {
		const {
			target: { value },
		} = e;
		setInputValue(value);
	};

	return (
		<>
			{inputName && <label htmlFor={inputName}>{inputName}</label>}
			<input
				id={inputName}
				type={inputType || "text"}
				placeholder={inputPlaceholder}
				value={inputValue}
				onChange={onTextChange}
			/>
		</>
	);
}

export default Inputs;
