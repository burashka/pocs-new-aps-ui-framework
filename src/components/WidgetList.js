import React from 'react';

const WidgetList = ({ id, children }) => {
	const newChildren = [];
	React.Children.forEach(children, (child) => {
		newChildren.push(React.cloneElement(child, { title: "TEST TEST TEST" }));
	});
	return <div>{ newChildren }</div>;
};

export default WidgetList;