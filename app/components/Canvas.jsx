import React from 'react'
import Item from './Item.jsx'
import Block from './Block.jsx'
import {connect} from 'react-redux';
import {createItem} from '../actions/items';
import {attachToBlock} from '../actions/blocks';


@connect((state) => ({
	allBlocks: state.blocks,
  allItems: state.items
}), {
	createItem,
	attachToBlock
})
export default class Canvas extends React.Component {
	render() {
		const { allBlocks,  allItems, createItem, attachToBlock } = this.props
		const blocks = []

allBlocks.map((block,index) => {
									const blockItems = block.items.map((i) => allItems[
     							 allItems.findIndex((item) => item.id === i.id)
    							]).filter((item) => item)
									blocks.push(<Block key={index} id={block.id} className={'block_'+block.id} createItem={createItem} attachToBlock={attachToBlock}>
													{blockItems.map( (item) => 
						 							<Item key={item.id} item={item} { ...item } />)}
						 							</Block>)})
		return <div className="canvas">
						 {blocks}
		       </div>
	}
}