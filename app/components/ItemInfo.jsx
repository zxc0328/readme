import React from 'react';

export default class ItemInfo extends React.Component {
	render() {
		const { name, phone } = this.props.content
		return <div className="info"><span>Name:{ name } </span><span>Phone:{ phone }</span></div>
	}
}