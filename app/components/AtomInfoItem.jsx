import React from 'react'
import Editable from './Editable.jsx'
import markdown from '../libs/markdown'

export default class AtomInfoItem extends React.Component {
	render() {
		const { updateAtom, atom } = this.props
		return <div  className="list_item">
							<Editable
							  key={0}
          			value={atom.content}
          			inputType={'textarea'}
          		  className={'edit edit_description'}
								placeholder={'click to enter content'}
								onValueClick={(val) => updateAtom({id:atom.id, editing:true})}
          			onEdit={(val) => updateAtom({id:atom.id, content:val,editing:false})}>
          			<div className="content"
          			dangerouslySetInnerHTML={markdown.get(atom.content)} />
          		</Editable>
					 </div>
	}
}