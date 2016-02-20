import React from 'react'
import {connect} from 'react-redux'
import {DragSource, DropTarget} from 'react-dnd'
import ItemTypes from '../constants/itemTypes'
import AtomListItem from './AtomListItem.jsx'
import AtomInfoItem from './AtomInfoItem.jsx'
import AtomListItemTitleLess from './AtomListItemTitleLess.jsx'
import {updateAtom} from '../actions/atoms'

const atomSource = {
  beginDrag(props) {
    return {
      id: props.id, 
      itemId: props.itemId
    }
  }
};

const atomTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem()
    const sourceId = sourceProps.id
    const targetId = targetProps.id
    if((sourceId !== targetId) && (sourceProps.itemId === targetProps.itemId)) {
      targetProps.onMove({sourceId, targetId, itemId:sourceProps.itemId})
    }
  }
};

@DragSource(ItemTypes.ITEM, atomSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))
@DropTarget(ItemTypes.ITEM, atomTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
@connect(() => ({
}), {
	updateAtom
})
export default class Atom extends React.Component {
	render() {
		const { atom, updateAtom, connectDragSource, connectDropTarget } = this.props
		const dragSource = atom.editing ? a => a : connectDragSource
		switch (this.props.type){
							case 0:
								return dragSource(connectDropTarget(<div className="atom">
												<AtomListItem
												atom={atom}
												updateAtom={updateAtom}
												/>
											 </div>))
							case 1:
								return dragSource(connectDropTarget(<div className="atom">
												<AtomInfoItem
												/>
											 </div>))
							case 2:
								return dragSource(connectDropTarget(<div className="atom">
												<AtomListItemTitleLess
												atom={atom}
												updateAtom={updateAtom}
												/>
											 </div>))
							default:
							  return <div className="atom"></div>
						}
	}
}