import React from 'react'
import superagent from 'superagent'
import Item from './Item.jsx'
import Block from './Block.jsx'
import Switcher from './Switcher.jsx'
import Header from './Header.jsx'
import {connect} from 'react-redux'
import {createAtom} from '../actions/atoms'
import {createItem} from '../actions/items'
import {attachMutiToItem} from '../actions/items'
import {attachToItem} from '../actions/items'
import {attachToBlock} from '../actions/blocks'
import {detachFromBlock} from '../actions/blocks'
import {moveItem} from '../actions/blocks'
import {themeSwitcherVisibility} from '../actions/global'

@connect((state) => ({
	allState: state,
	allBlocks: state.blocks,
  allItems: state.items,
  global: state.global
}), {
	createAtom,
	attachMutiToItem,
	createItem,
	attachToItem,
	attachToBlock,
	detachFromBlock,
	moveItem,
	themeSwitcherVisibility
})
export default class Canvas extends React.Component {
	render() {
		const btnStyle = {
			fontSize:'20px'
		}
		const { allState, allBlocks,  allItems, createItem, attachMutiToItem, attachToBlock, createAtom,
			detachFromBlock, changeBlockLayout, themeSwitcherVisibility, moveItem ,attachToItem, global} = this.props
		const blocks = []
	  let switcherFlag = global.themeSwitcherVisibility
allBlocks.map((block,index) => {
									const blockItems = block.items.map((id) => allItems[
     							 allItems.findIndex((item) => item.id === id)
    							]).filter((item) => item)
									blocks.push(<Block key={index} id={block.id} className={'block ' + 'block_'+block.id} 
										createItem={createItem} createAtom={createAtom} attachMutiToItem={attachMutiToItem} attachToItem={attachToItem}
										attachToBlock={attachToBlock} detachFromBlock={detachFromBlock}
									  items={block.items}>
													{blockItems.map( (item) => 
						 							<Item key={item.id}  blockId={block.id} item={item} { ...item } onMove={moveItem}/>)}
						 							</Block>)})
		return <div className="canvas_container">
						<div className={ "canvas " + global.theme}>
						 { global.editing ?
						 <div>
						 	<button className={'toggleSwticher mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accentg'} onClick={() => themeSwitcherVisibility(!switcherFlag)}>Switch Theme</button>
						 	<Switcher/>
						 </div> 
						 : null }
						 <Header tName={global.theme}/>
						 {blocks}		
		       	</div>
		       </div>
	}

}