import React from 'react';

const Panel = ({ title, children }) => {
	return <div>
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

export default Panel;