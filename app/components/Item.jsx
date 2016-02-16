import React from 'react';
import ItemInfo from './ItemInfo.jsx'
import ItemList from './ItemList.jsx'

export default class Item extends React.Component {
	render() {
		switch (this.props.type){
							case 0:
								return <div className="item">{this.renderInfo()}</div>
							case 1:
							  return <div className="item">{this.renderList()}</div>
							default:
							  return <div className="item"></div>
						}
	}
	renderInfo() {
		return <ItemInfo content={this.props.content}/>
	}
	renderList(){
		return <ItemList content={this.props.content}/>
	}
}