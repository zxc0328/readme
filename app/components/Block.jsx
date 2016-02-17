import React from 'react';
import {DropTarget} from 'react-dnd'
import ItemTypes from '../constants/itemTypes';

const itemTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem()
    const type = sourceProps.type
    const result = targetProps.createItem({type})
    const blockId = targetProps.id
    targetProps.attachToBlock({blockId,itemId:result.item.id})
  }
}

@DropTarget(ItemTypes.ITEM, itemTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Block extends React.Component {
	render() {
		const {connectDropTarget} = this.props
		return connectDropTarget(<div className={'block '+this.props.className}>{ this.props.children }</div>)
	}
}