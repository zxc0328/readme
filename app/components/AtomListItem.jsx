import React from 'react';

export default class AtomListItem extends React.Component {
	render() {
		return <div className="list_item">{this.props._children}</div>
	}
}