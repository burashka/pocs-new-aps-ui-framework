import React from 'react';
import ButtonBS from 'react-bootstrap/lib/Button';

const Button = ({ id, label, ...props }) => {
	return <ButtonBS { ...props }>
		{label}
	</ButtonBS>;
};

export default Button;