import React from "react";

import Form from "react-bootstrap/Form";

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
		<div>
			{inputName && <Form.Label className="mb-1">{inputName}</Form.Label>}
			<Form.Control
				type={inputType || "text"}
				placeholder={inputPlaceholder}
				value={inputValue}
				onChange={onTextChange}
			/>
		</div>
	);
}

export default Inputs;
