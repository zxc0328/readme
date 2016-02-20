import React from 'react'
import Atom from './Atom.jsx'
import ItemEdit from './ItemEdit.jsx'

export default class ItemList extends React.Component {
	render() {
		const { global, blockId, atomType, atoms, item, onValueClick, onEdit, onDelete, onMove } = this.props
		const itemAtoms = item.atoms.map((id) => atoms[
      atoms.findIndex((atom) => atom.id === id)
    	]).filter((atom) => atom)
		
		return <div className="list">
						{ global.editing ? <ItemEdit itemId={item.id} noAdd={true} blockId={blockId} atomType={atomType}/> : null }
						{itemAtoms.map( (atom) => 
							<Atom type={atom.type} key={atom.id} atom={atom} 
							id={atom.id} itemId={item.id} global={global} onMove={onMove} />
						)}
					 </div>
	}
}