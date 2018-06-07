import React from 'react';
import ButtonBS from 'react-bootstrap/lib/Button';
import { string, number, func, oneOfType } from 'prop-types';

const Button = ({ id, label, ...props }) => {
	return <ButtonBS { ...props }>
		{label}
	</ButtonBS>;
};

Button.propTypes = {
	id: oneOfType([number, string]),
	onClick: func,
	label: string
};

export default Button;