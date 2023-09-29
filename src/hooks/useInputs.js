import React from "react";

function Inputs({
	inputId,
	inputName,
	inputType,
	inputValue,
	setInputValue,
	inputPlaceholder,
	inputAutoType,
	isRequired,
}) {
	const onValueChange = (e) => {
		const {
			target: { value },
		} = e;
		setInputValue(value);
	};

	return (
		<>
			{inputName && <label htmlFor={inputId}>{inputName}</label>}
			<input
				id={inputId}
				required={isRequired || false}
				type={inputType || "text"}
				placeholder={inputPlaceholder}
				value={inputValue}
				autoComplete={inputAutoType || "off"}
				onChange={onValueChange}
			/>
		</>
	);
}

export default Inputs;
