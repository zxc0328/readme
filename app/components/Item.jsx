import React from 'react'
import ItemInfo from './ItemInfo.jsx'
import ItemList from './ItemList.jsx'
import {connect} from 'react-redux'
import {createAtom} from '../actions/atoms'
import {updateAtom} from '../actions/atoms'
import {deleteAtom} from '../actions/atoms'
import {attachToItem} from '../actions/items'
import {detachFromItem} from '../actions/items'

@connect((state) => ({
  allAtoms: state.atoms
}), {
	createAtom,
	updateAtom,
	deleteAtom,
	attachToItem,
	detachFromItem
})
export default class Item extends React.Component {
	render() {
		const { allAtoms, item, createAtom, attachToItem, detachFromItem, updateAtom, deleteAtom } = this.props
		switch (this.props.type){
							case 0:
								return <div className="item">
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
											 </div>
							case 1:
							  return <div className="item">hello</div>
							default:
							  return <div className="item"></div>
						}
	}
}