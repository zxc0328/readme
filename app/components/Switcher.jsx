import React from 'react'
import {connect} from 'react-redux'
import {changeBlockLayout} from '../actions/blocks'
import {switchTheme} from '../actions/global'

@connect((state) => ({
	global: state.global
}), {
	changeBlockLayout,
	switchTheme
})	
export default class Switcher extends React.Component {
	render() {
		const { global, changeBlockLayout,switchTheme} = this.props
		return <div className='switcher' style = { (global.themeSwitcherVisibility ? {transform: 'translateY(0px)'}:{transform: 'translateY(100%)'}) }>
							<div className='switcher_item' onClick={() => {changeBlockLayout('hui'); switchTheme('hui')}}>
								<img src="http://7oxh2b.com1.z0.glb.clouddn.com/readme_layout_1.png" alt="two_column"/>
							</div>
							<div className='switcher_item' onClick={() => {changeBlockLayout('top_one_bottom_two'); switchTheme('top_one_bottom_two')}}>
								<img src="http://7oxh2b.com1.z0.glb.clouddn.com/readme_layout_2.png" alt="top_one_bottom_two"/>
							</div>
					</div>
	}
}