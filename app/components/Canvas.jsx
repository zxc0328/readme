import React from 'react'
import Item from './Item.jsx'
import Block from './Block.jsx'
import {connect} from 'react-redux'
import {createItem} from '../actions/items'
import {attachToBlock} from '../actions/blocks'
import {changeBlockLayout} from '../actions/blocks'

@connect((state) => ({
	allBlocks: state.blocks,
  allItems: state.items
}), {
	createItem,
	attachToBlock,
	changeBlockLayout
})
export default class Canvas extends React.Component {
	render() {
		const { allBlocks,  allItems, createItem, attachToBlock, changeBlockLayout } = this.props
		const blocks = []
		console.log(changeBlockLayout)
allBlocks.map((block,index) => {
									const blockItems = block.items.map((i) => allItems[
     							 allItems.findIndex((item) => item.id === i.id)
    							]).filter((item) => item)
									blocks.push(<Block key={index} id={block.id} style={block.style} className={'block_'+block.id} createItem={createItem} attachToBlock={attachToBlock}>
													{blockItems.map( (item) => 
						 							<Item key={item.id} item={item} { ...item } />)}
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