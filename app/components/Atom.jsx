import React from 'react';
import AtomListItem from './AtomListItem.jsx'

export default class Atom extends React.Component {
	render() {
	
		switch (this.props.type){
							case 0:
								return <div className="atom">{this.renderListItem()}</div>
							default:
							  return <div className="atom"></div>
						}
	}
	renderListItem() {
		return <AtomListItem />
	}
}