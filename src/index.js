import React from 'react';
import { render } from 'react-dom';
import View from './ui/View';

const wizardState = [{
	id: "vps",
	label: "Add VPS"
}];

render(
	<View wizardState = { wizardState } />,
	document.getElementById('root')
);