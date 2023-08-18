import React from "react";

import Form from "react-bootstrap/Form";

function Inputs({ inputName, inputValue, setInputValue, inputPlaceholder }) {
	const onTextChange = (e) => {
		const {
			target: { value },
		} = e;
		setInputValue(value);
	};

	return (
		<div>
			<Form.Label>{inputName}</Form.Label>
			<Form.Control
				type="text"
				placeholder={inputPlaceholder}
				value={inputValue}
				onChange={onTextChange}
			/>
		</div>
	);
}

export default Inputs;
