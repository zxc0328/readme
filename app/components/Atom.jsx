import React from 'react'
import {connect} from 'react-redux'
import AtomListItem from './AtomListItem.jsx'
import AtomInfoItem from './AtomInfoItem.jsx'
import {updateAtom} from '../actions/atoms'

@connect(() => ({
}), {
	updateAtom
})
export default class Atom extends React.Component {
	render() {
		const { atom, updateAtom } = this.props
		switch (this.props.type){
							case 0:
								return <div className="atom">
												<AtomListItem
												atom={atom}
												updateAtom={updateAtom}
												/>
											 </div>
							case 1:
								return <div className="atom">
												<AtomInfoItem
												/>
											 </div>
							default:
							  return <div className="atom"></div>
						}
	}
}