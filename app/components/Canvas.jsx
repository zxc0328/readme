import React from 'react'
import Item from './Item.jsx'
import Block from './Block.jsx'
import {connect} from 'react-redux'
import {createAtom} from '../actions/atoms'
import {createItem} from '../actions/items'
import {attachToItem} from '../actions/items'
import {attachToBlock} from '../actions/blocks'
import {detachFromBlock} from '../actions/blocks'
import {changeBlockLayout} from '../actions/blocks'
import {moveItem} from '../actions/blocks'

@connect((state) => ({
	allBlocks: state.blocks,
  allItems: state.items
}), {
	createAtom,
	createItem,
	attachToItem,
	attachToBlock,
	detachFromBlock,
	changeBlockLayout,
	moveItem
})
export default class Canvas extends React.Component {
	render() {
		const { allBlocks,  allItems, createItem, attachToBlock, createAtom,
			detachFromBlock, changeBlockLayout, moveItem ,attachToItem} = this.props
		const blocks = []
allBlocks.map((block,index) => {
									const blockItems = block.items.map((id) => allItems[
     							 allItems.findIndex((item) => item.id === id)
    							]).filter((item) => item)
									blocks.push(<Block key={index} id={block.id} style={block.style} className={'block_'+block.id} 
										createItem={createItem} createAtom={createAtom} attachToItem={attachToItem}
										attachToBlock={attachToBlock} detachFromBlock={detachFromBlock}
									  items={block.items}>
													{blockItems.map( (item) => 
						 							<Item key={item.id}  blockId={block.id} item={item} { ...item } onMove={moveItem}/>)}
						 							</Block>)})
		return <div className="canvas">
						 {blocks}
						<div className="switcher">
							<div onClick={() => changeBlockLayout('two_column')}>Theme 1</div>
							<div onClick={() => changeBlockLayout('top_one_bottom_two')}>Theme 2</div>
						</div>
		       </div>
	}
}