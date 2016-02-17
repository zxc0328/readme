import React from 'react';
import Atom from './Atom.jsx'
import Editable from './Editable.jsx';

export default class ItemInfo extends React.Component {
	render() {
		const { atoms, item, onValueClick, onEdit, onDelete } = this.props
			const itemAtoms = item.atoms.map((a) => atoms[
      atoms.findIndex((atom) => atom.id === a.id)
    	]).filter((atom) => atom)
	
		return <div className="info">
						<button onClick={this.onBtnClick.bind(this)}>add</button>
						{itemAtoms.map( (atom) => 
							<Atom type={atom.type} key={atom.id}>
								<Editable
          			editing={atom.editing}
          			value={atom.text}
          			onValueClick={onValueClick.bind(null, atom.id)}
          			onEdit={onEdit.bind(null, atom.id)}
          			onDelete={onDelete.bind(null, atom.id)} />
							</Atom>
						)}
					 </div>
	}
	onBtnClick() {
		const { item, createAtom, attachToItem } = this.props
		const obj = createAtom({type:0})
		attachToItem({itemId:item.id, atomId:obj.atom.id})
	}
}