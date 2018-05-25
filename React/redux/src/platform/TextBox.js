import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { string, number, func, oneOfType, arrayOf } from 'prop-types';

const TextBox = ({ id, label, description, ...props }) => {
	return <FormGroup controlId={id}>
		<ControlLabel>{label}</ControlLabel>
		<FormControl {...props} />
		{description && <HelpBlock>{description}</HelpBlock>}
	</FormGroup>;
};

TextBox.propTypes = {
	id: oneOfType([number, string]),
	description: string,
	label: string,
	onChange: func,
	value: oneOfType([number, string])
};

export default TextBox;