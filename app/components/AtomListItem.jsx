import React from 'react'
import Editable from './Editable.jsx'

const style = {
	title:{
		fontSize:'20px',
		lineHeight:'40px'
	},
	content:{
		fontSize:'14px',
		lineHeight:'20px'
	}
}
export default class AtomListItem extends React.Component {
	render() {
		const { atom, itemId, updateAtom, updateItem } = this.props
		return <div className="list_item">
							<Editable
							  key={0}
          			value={atom.title}
								style={style.title}
								inputType={'text'}
								placeholder='click to enter title'
								onValueClick={(val) => this.updateEditState(atom, itemId, updateAtom, updateItem) }
          			onEdit={(val) => updateAtom({id:atom.id, title:val,editing:false})}>
          			<span className="value">{atom.title}</span>
          		</Editable>
          		<Editable
          		  key={1}
          		  style={style.content}
          		  inputType={'textarea'}
          			value={atom.description}
          			placeholder='click to enter description'
          			onValueClick={(val) => this.updateEditState(atom, itemId, updateAtom, updateItem) }
          			onEdit={(val) => updateAtom({id:atom.id, description:val,editing:false})}>
          			<span className="value">{atom.description}</span>
          		</Editable>
					 </div>
	}
	updateEditState (atom, itemId, updateAtom, updateItem) {
		updateAtom({id:atom.id, editing:true}) 
		updateItem({id:itemId, editing:true})
	}
}