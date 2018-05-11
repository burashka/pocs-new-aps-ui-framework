import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const TextBox = ({ id, label, description, ...props }) => {
	return <FormGroup controlId={id}>
		<ControlLabel>{label}</ControlLabel>
		<FormControl {...props} />
		{description && <HelpBlock>{description}</HelpBlock>}
	</FormGroup>;
};

export default TextBox;