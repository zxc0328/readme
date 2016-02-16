import React from 'react';
import ItemInfo from './ItemInfo.jsx'
import ItemList from './ItemList.jsx'
import {createAtom} from '../actions/atoms';
import {attachToItem} from '../actions/items';
import {connect} from 'react-redux';

@connect((state) => ({
  allAtoms: state.atoms
}), {
	createAtom,
	attachToItem
})
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
		const { allAtoms, item, createAtom, attachToItem } = this.props
		return <ItemInfo atoms={allAtoms} item={item} createAtom={createAtom} attachToItem={attachToItem}/>
	}
	renderList() {
		const { allAtoms, item, createAtom, attachToItem } = this.props
		return <ItemList atoms={allAtoms} item={item} createAtom={createAtom} attachToItem={attachToItem}/>
	}
}