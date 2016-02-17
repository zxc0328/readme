import React from 'react'
import Item from './Item.jsx'
import {DropTarget} from 'react-dnd'
import ItemTypes from '../constants/itemTypes';
import {connect} from 'react-redux';
import {createItem} from '../actions/items';
import {attachToBlock} from '../actions/blocks';

const itemTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem()
    const type = sourceProps.type
    const result = targetProps.createItem({type})
    targetProps.attachToBlock(result.item.id)
  }
}

@connect((state) => ({
	blocks: state.blocks,
  allItems: state.items
}), {
	createItem,
	attachToBlock
})
@DropTarget(ItemTypes.ITEM, itemTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Canvas extends React.Component {
	render() {
		const {connectDropTarget, blocks, allItems, createItem, attachToBlock, ...props} = this.props
		const items = []
		allItems.map( (item) => { items.push(<Item key={item.id} item={item} { ...item } />) })
		return connectDropTarget(
			     <div className="canvas" {...props}>
						 Drop here!
						 { items}
		       </div>
		       )
	}
}