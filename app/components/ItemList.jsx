import React from 'react';
import Atom from './Atom.jsx'
import Editable from './Editable.jsx';

export default class ItemList extends React.Component {
	render() {
		const { atoms, item, onValueClick, onEdit, onDelete, onMove } = this.props
		const itemAtoms = item.atoms.map((id) => atoms[
      atoms.findIndex((atom) => atom.id === id)
    	]).filter((atom) => atom)
	
		return <div className="list">
						<button onClick={this.onBtnClick.bind(this)}>add</button>
						{itemAtoms.map( (atom) => 
							<Atom type={atom.type} key={atom.id} atom={atom} id={atom.id} itemId={item.id} onMove={onMove} />
						)}
					 </div>
	}
	onBtnClick() {
		const { item, createAtom, attachToItem } = this.props
		const obj = createAtom({type:1})
		attachToItem({itemId:item.id, atomId:obj.atom.id})
	}
}