import React from 'react'
import Editable from './Editable.jsx'
import markdown from '../libs/markdown'

export default class AtomListItem extends React.Component {
	render() {
		const { atom, itemId, updateAtom, updateItem } = this.props
		return <div className="list_item">
							<Editable
							  key={0}
          			value={atom.title}
								inputType={'text'}
								className={'edit edit_title'}
								placeholder='click to enter title'
								onValueClick={(val) => this.updateEditState(atom, itemId, updateAtom, updateItem) }
          			onEdit={(val) => updateAtom({id:atom.id, title:val,editing:false})}>
          			<div className="title">{atom.title}</div>
          		</Editable>
          		<Editable
          		  key={1}
          		  inputType={'textarea'}
          		  className={'edit edit_description'}
          			value={atom.description}
          			placeholder={'click to enter description'}
          			onValueClick={(val) => this.updateEditState(atom, itemId, updateAtom, updateItem) }
          			onEdit={(val) => updateAtom({id:atom.id, description:val,editing:false})}>
          			<div className="description" 
          			dangerouslySetInnerHTML={markdown.get(atom.description)} />
          		</Editable>
					 </div>
	}
	updateEditState (atom, itemId, updateAtom, updateItem) {
		updateAtom({id:atom.id, editing:true}) 
		updateItem({id:itemId, editing:true})
	}
}