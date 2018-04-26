import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const Select = ({ id, label, description, options, ...props }) => {
	return <FormGroup controlId={id}>
		<ControlLabel>{label}</ControlLabel>
		<FormControl componentClass="select" {...props}>
			{options.map(option => {
				return <option
					key= {option.value}
					value = {option.value}
				>
					{option.label}
				</option>;
			})}
		</FormControl>
		{description && <HelpBlock>{description}</HelpBlock>}
	</FormGroup>;
};

export default Select;