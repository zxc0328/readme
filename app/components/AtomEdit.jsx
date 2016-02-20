import React from 'react';
import {connect} from 'react-redux'
import {deleteAtom} from '../actions/atoms'

@connect((state) => ({
}), {
	deleteAtom
})
export default class AtomEdit extends React.Component {
	render() {
		return <div className="atom_edit">
      			<button className="atom_edit--btn" onClick={() => this.onBtnClick()}>x</button>
					 </div>
	}
	onBtnClick(type) {
		const { deleteAtom, atomId } = this.props
		deleteAtom(atomId)
	}
}