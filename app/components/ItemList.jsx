import React from 'react';
import Atom from './Atom.jsx'
import Editable from './Editable.jsx';

export default class ItemList extends React.Component {
	render() {
		const { atoms, item, onValueClick, onEdit, onDelete } = this.props
			const itemAtoms = item.atoms.map((a) => atoms[
      atoms.findIndex((atom) => atom.id === a.id)
    	]).filter((atom) => atom)
	
		return <div className="list">
						<button onClick={this.onBtnClick.bind(this)}>add</button>
						{itemAtoms.map( (atom) => 
							<Atom type={atom.type} key={atom.id}>
							</Atom>
						)}
					 </div>
	}
	onBtnClick() {
		const { item, createAtom, attachToItem } = this.props
		const obj = createAtom({type:1})
		attachToItem({itemId:item.id, atomId:obj.atom.id})
	}
}