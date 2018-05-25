import React from 'react';
import { string, number, oneOfType } from 'prop-types';
import Output from "./Output";

const Panel = ({ id, title, children }) => {
	return <div id={id}>
		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">
					<span>{title}</span>
				</h3>
			</div>
			<div className='panel-body'>
				<div>{children}</div>
			</div>
		</div>
	</div>
};

Output.propTypes = {
	id: oneOfType([number, string]),
	title: string
};

export default Panel;