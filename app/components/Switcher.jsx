import React from 'react'
import {connect} from 'react-redux'
import {changeBlockLayout} from '../actions/blocks'

@connect((state) => ({
	global: state.global
}), {
	changeBlockLayout
})
export default class Switcher extends React.Component {
	render() {
		const { global, changeBlockLayout } = this.props
		return <div className='switcher' style = { (global.themeSwitcherVisibility ? {transform: 'translateY(0px)'}:{transform: 'translateY(100%)'}) }>
							<div className='switcher_item' onClick={() => changeBlockLayout('two_column')}>Theme 1</div>
							<div className='switcher_item' onClick={() => changeBlockLayout('top_one_bottom_two')}>Theme 2</div>
					</div>
	}
}