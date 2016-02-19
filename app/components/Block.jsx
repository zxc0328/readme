import React from 'react';
import {DropTarget} from 'react-dnd'
import ItemTypes from '../constants/itemTypes';

const itemTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem()
    const blockId = targetProps.id
    if (sourceProps.create){
      const type = sourceProps.type
      const result = targetProps.createItem({type,title:'Experience'})
      targetProps.attachToBlock({blockId,itemId:result.item.id})
    }else{
      if(targetProps.items.length === 0){
        const sourceBlockId = sourceProps.blockId
        const itemId = sourceProps.id
        targetProps.detachFromBlock({blockId:sourceBlockId,itemId})
        targetProps.attachToBlock({blockId,itemId})
      }
    }
  }
}

@DropTarget(ItemTypes.ITEM, itemTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Block extends React.Component {
	render() {
		const {connectDropTarget} = this.props
		return connectDropTarget(<div style={this.props.style} className={'block '+this.props.className}>{ this.props.children }</div>)
	}
}