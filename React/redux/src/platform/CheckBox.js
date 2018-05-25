import React from 'react';
import { FormGroup, ControlLabel, Checkbox, HelpBlock } from 'react-bootstrap';
import { string, number, func, oneOfType, bool } from 'prop-types';

const CheckBox = ({ id, label, description, hint, ...props }) => {
	return <FormGroup controlId={id}>
		{label && <ControlLabel>{label}</ControlLabel>}
		<Checkbox {...props} >
			{description}
		</Checkbox>
		{hint && <HelpBlock>{hint}</HelpBlock>}
	</FormGroup>;
};

Checkbox.propTypes = {
	id: oneOfType([number, string]),
	description: string,
	label: string,
	hint: string,
	checked: bool,
	onChange: func
};

export default CheckBox;