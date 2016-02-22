import React from 'react'
import {connect} from 'react-redux'
import {DragSource, DropTarget} from 'react-dnd'
import ItemTypes from '../constants/itemTypes'

// import atom
import AtomListItem from './AtomListItem.jsx'
import AtomInfoItem from './AtomInfoItem.jsx'
import AtomSvgBar from './AtomSvgBar.jsx'
import AtomEdit from './AtomEdit.jsx'
import AtomListItemTitleLess from './AtomListItemTitleLess.jsx'

// import action
import {updateAtom} from '../actions/atoms'
import {updateItem} from '../actions/items'

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
	updateAtom,
	updateItem
})
export default class Atom extends React.Component {
	render() {
		const { atom, itemId, updateAtom, updateItem, connectDragSource, connectDropTarget, global } = this.props
		const dragSource = atom.editing ? a => a : connectDragSource
		switch (this.props.type){
							case 0:
								return dragSource(connectDropTarget(<div className="atom">
												{ global.editing ? <AtomEdit atomId={atom.id}/> : null}
												<AtomListItem
												atom={atom}
												itemId={itemId}
												updateAtom={updateAtom}
												updateItem={updateItem}
												/>
											 </div>))
							case 1:
								return dragSource(connectDropTarget(<div className="atom">
												{ global.editing ? <AtomEdit atomId={atom.id}/> : null}
												<AtomInfoItem
												/>
											 </div>))
							case 2:
								return dragSource(connectDropTarget(<div className="atom">
												{ global.editing ? <AtomEdit atomId={atom.id}/> : null}
												<AtomListItemTitleLess
												atom={atom}
												itemId={itemId}
												updateAtom={updateAtom}
												updateItem={updateItem}
												/>
											 </div>))
							case 3:
								return dragSource(connectDropTarget(<div className="atom">
												{ global.editing ? <AtomEdit atomId={atom.id}/> : null}
												<AtomSvgBar
												atom={atom}
												itemId={itemId}
												updateAtom={updateAtom}
												updateItem={updateItem}
												/>
											 </div>))
							default:
							  return <div className="atom"></div>
						}
	}
}