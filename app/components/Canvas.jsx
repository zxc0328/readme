import React from 'react'
import Item from './Item.jsx'
import {DropTarget} from 'react-dnd'
import ItemTypes from '../constants/itemTypes';
import {connect} from 'react-redux';
import {addItem} from '../actions/items';

const itemTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem()
    const type = sourceProps.type
    targetProps.addItem({type})
  }
}

@connect((state) => ({
  allItems: state.items
}), {
	addItem
})
@DropTarget(ItemTypes.ITEM, itemTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Canvas extends React.Component {
	render() {
		const {connectDropTarget, allItems, addItem, ...props} = this.props
		const items = []
		allItems.map( (item) => { items.push(<Item type={item.type} key={item.id}/>) })
		return connectDropTarget(
			     <div className="canvas" {...props}>
						 Drop here!
						 { items}
		       </div>
		       )
	}
}