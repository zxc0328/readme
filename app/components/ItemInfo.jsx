import React from 'react';
import Atom from './Atom.jsx'
import ItemEdit from './ItemEdit.jsx'

export default class ItemInfo extends React.Component {
	render() {
		const { atoms, item, onValueClick, onEdit, 
			onDelete, global, blockId, atomType, onMove } = this.props
		const itemAtoms = item.atoms.map((id) => atoms[
      atoms.findIndex((atom) => atom.id === id)
    	]).filter((atom) => atom)
		return <div className="info">
						{ global.editing ? <ItemEdit itemId={item.id} blockId={blockId} atomType={atomType}/> : null }
						{itemAtoms.map( (atom) => 
							<Atom type={atom.type} key={atom.id} id={atom.id} atom={atom} itemId={item.id} onMove={onMove}/>
						)}
					 </div>
	}
}