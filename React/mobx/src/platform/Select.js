import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox} from 'react-bootstrap';
import { string, number, func, oneOfType, arrayOf, shape } from 'prop-types';

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

Select.propTypes = {
	id: oneOfType([number, string]),
	description: string,
	label: string,
	onChange: func,
	options: arrayOf(shape({
		label: string,
		value: oneOfType([number, string])
	}))
};

export default Select;