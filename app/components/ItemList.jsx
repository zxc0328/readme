import React from 'react';

export default class ItemList extends React.Component {
	render() {
		return <div className="list">
							{this.props.content.map((item) => 
								<div>
									<span>{item.time}:</span>
									<span>{item.company}</span>
								</div>
							)}
					 </div>
	}
}