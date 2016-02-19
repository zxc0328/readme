import React from 'react'
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import ItemInfo from './ItemInfo.jsx'
import ItemList from './ItemList.jsx'
import {connect} from 'react-redux'
import {createAtom} from '../actions/atoms'
import {updateAtom} from '../actions/atoms'
import {deleteAtom} from '../actions/atoms'
import {attachToItem} from '../actions/items'
import {detachFromItem} from '../actions/items'
import {updateItem} from '../actions/items'
import Editable from './Editable.jsx';

const itemSource = {
  beginDrag(props) {
    return {
      id: props.id,
      blockId:props.blockId,
      move:true   
    }
  }
};

const itemTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    const targetId = targetProps.id;
    const blockId = targetProps.blockId
    const sourceBlockId = sourceProps.blockId
    if((sourceId !== targetId) && sourceProps.move) {
      targetProps.onMove({sourceId, targetId});
    }
  }
};

@DragSource(ItemTypes.ITEM, itemSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))
@DropTarget(ItemTypes.ITEM, itemTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
@connect((state) => ({
  allAtoms: state.atoms
}), {
	createAtom,
	updateAtom,
	deleteAtom,
	attachToItem,
	detachFromItem,
	updateItem
})
export default class Item extends React.Component {
	render() {
		const { connectDragSource, connectDropTarget, allAtoms, item, createAtom, attachToItem, detachFromItem, updateAtom, deleteAtom,updateItem } = this.props
		const dragSource = item.editing ? a => a : connectDragSource;
		switch (this.props.type){
							case 0:
								return dragSource(connectDropTarget(<div className="item">
													<div className="item_header" onClick={() => updateItem({id: item.id, editing: true})}>
														<Editable
          									editing={item.editing}
          									value={item.title}
          									onEdit={title => updateItem({id: item.id, title, editing: false})}/>
													</div>
												<ItemInfo 
												atoms={allAtoms} 
												item={item} 
												createAtom={createAtom} 
												attachToItem={attachToItem}
												onValueClick={id => updateAtom({id, editing: true})} 
												onEdit={(id, text) => updateAtom({id, text, editing: false})}
          							onDelete={id => { detachFromItem (item.id, id) 
          																deleteAtom(id)}}
          							/>
											 </div>))
							case 1:
							  return dragSource(connectDropTarget(<div className="item">
							  				<ItemList 
							  				atoms={allAtoms} 
												item={item} 
												createAtom={createAtom} 
												attachToItem={attachToItem}/>
							  			 </div>))
							default:
							  return dragSource(connectDropTarget(<div className="item"></div>))
						}
	}
}