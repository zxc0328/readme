import React from 'react'
import Editable from './Editable.jsx'
import markdown from '../libs/markdown'

export default class AtomListItemTitleLess extends React.Component {
	render() {
		const { updateAtom, atom, inputType} = this.props
		return <div className="list_item">
							<Editable
							  key={0}
          			value={atom.content}
          			inputType={inputType}
								placeholder={'Click to enter content, markdown supported'}
								onValueClick={(val) => updateAtom({id:atom.id, editing:true})}
          			onEdit={(val) => updateAtom({id:atom.id, content:val,editing:false})}>
          			<div className="value">{atom.content}</div>
          		</Editable>
					 </div>
	}
}