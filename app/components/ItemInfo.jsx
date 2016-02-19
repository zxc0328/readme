import React from 'react';
import Atom from './Atom.jsx'

export default class ItemInfo extends React.Component {
	render() {
		const { atoms, item, onValueClick, onEdit, onDelete, global } = this.props
			const itemAtoms = item.atoms.map((a) => atoms[
      atoms.findIndex((atom) => atom.id === a.id)
    	]).filter((atom) => atom)
		console.log(global)
		return <div className="info">
						{(() => {
        			if(global.editing){
        				return <button className="info_addBtn" onClick={this.onBtnClick.bind(this)}>add</button>
        			}
      			})()}
						{itemAtoms.map( (atom) => 
							<Atom type={atom.type} key={atom.id} atom={atom}/>
						)}
					 </div>
	}
	onBtnClick() {
		const { item, atomType, createAtom, attachToItem } = this.props
		const obj = createAtom({type:atomType})
		attachToItem({itemId:item.id, atomId:obj.atom.id})
	}
}