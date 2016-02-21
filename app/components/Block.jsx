import React from 'react';
import {DropTarget} from 'react-dnd'
import ItemTypes from '../constants/itemTypes'
import itemInit from '../constants/itemInit'

const itemTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem()
    const blockId = targetProps.id
    if (sourceProps.create){
      const type = sourceProps.type
      const newItemId = targetProps.createItem({type,title:'Click to edit title'}).item.id
      targetProps.attachToBlock({blockId,itemId:newItemId})
      if (itemInit[type]){
        const atomType = itemInit[type]
        atomType.map((type) => {
          const obj = targetProps.createAtom({type})
          targetProps.attachToItem({itemId:newItemId, atomId:obj.atom.id})
        })
      }
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