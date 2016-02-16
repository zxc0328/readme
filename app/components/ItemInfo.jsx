import React from 'react';
import Atom from './Atom.jsx'

export default class ItemInfo extends React.Component {
	render() {
		const { atoms, item } = this.props
			const itemAtoms = item.atoms.map((a) => atoms[
      atoms.findIndex((atom) => atom.id === a.id)
    	]).filter((atom) => atom)
	
		return <div className="info">
						<button onClick={this.onBtnClick.bind(this)}>add</button>
						{itemAtoms.map( (atom) => 
							<Atom type={atom.type} text={atom.text} key={atom.id}/>
						)}
					 </div>
	}
	onBtnClick() {
		const { item, createAtom, attachToItem } = this.props
		const obj = createAtom({type:0})
		attachToItem({itemId:item.id, atomId:obj.atom.id})
	}
}