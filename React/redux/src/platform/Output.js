import React from 'react';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import { string, number, oneOfType } from 'prop-types';

const Output = ({ id, label, description, value }) => {
	return <FormGroup controlId={id}>
		{label && <ControlLabel>{label}</ControlLabel>}
		<div className="input-group">
			<p className="form-control-static text-default">
				{ typeof value === "string" ? value : value.toString() }
			</p>
		</div>
		{description && <HelpBlock>{description}</HelpBlock>}
	</FormGroup>;
};

Output.propTypes = {
	id: oneOfType([number, string]),
	description: string,
	label: string,
	value: string
};

export default Output;