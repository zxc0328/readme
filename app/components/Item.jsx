import React from 'react';

export default class Item extends React.Component {
	render() {
		return <div className="item">I am a item of type { this.props.type}</div>
	}
}