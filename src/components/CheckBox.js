import React from 'react';
import { FormGroup, ControlLabel, Checkbox, HelpBlock } from 'react-bootstrap';

const CheckBox = ({ id, label, description, hint, ...props }) => {
	return <FormGroup controlId={id}>
		{label && <ControlLabel>{label}</ControlLabel>}
		<Checkbox {...props} >
			{description}
		</Checkbox>
		{hint && <HelpBlock>{hint}</HelpBlock>}
	</FormGroup>;
};

export default CheckBox;