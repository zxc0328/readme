import React from 'react';
import AtomListItem from './AtomListItem.jsx'

export default class Atom extends React.Component {
	render() {
	
		switch (this.props.type){
							case 0:
								return <div className="atom">{this.renderListItem(this.props.children)}</div>
							default:
							  return <div className="atom"></div>
						}
	}
	renderListItem(children) {
		return <AtomListItem _children={children}/>
	}
}