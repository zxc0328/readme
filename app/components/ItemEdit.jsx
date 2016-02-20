import React from 'react';
import {connect} from 'react-redux'
import {createAtom} from '../actions/atoms'
import {attachToItem} from '../actions/items'
import {updateItem} from '../actions/items'
import {deleteItem} from '../actions/items'
import {detachFromBlock} from '../actions/blocks'

@connect(() => ({
}), {
	createAtom,
	updateItem,
	attachToItem,
	deleteItem,
	detachFromBlock
})
export default class ItemEdit extends React.Component {
	render() {
		const { noAdd } = this.props
		return <div className="info_btn">
						{ noAdd ? null : <button className="info_btn--add" onClick={() => this.onBtnClick(0)}>+</button>}
      			<button className="info_btn--delete" onClick={() => this.onBtnClick(1)}>x</button>
					 </div>
	}
	onBtnClick(type) {
		const { itemId, blockId, atomType, createAtom, 
			attachToItem, deleteItem, detachFromBlock } = this.props
		switch (type){
			case 0:
				const obj = createAtom({type:atomType})
				attachToItem({itemId, atomId:obj.atom.id})
				break
			case 1:
				detachFromBlock({itemId, blockId})
				deleteItem({id:itemId})
				break
			default:
				return 
		}
	}
}
