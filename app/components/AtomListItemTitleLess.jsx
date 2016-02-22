import React from 'react'
import Editable from './Editable.jsx'

const style = {
	title:{
		fontSize:'20px',
		lineHeight:'40px'
	}
}
export default class AtomListItemTitleLess extends React.Component {
	render() {
		const { updateAtom, atom } = this.props
		return <div className="list_item">
							<Editable
							  key={0}
          			value={atom.content}
          			inputType={'text'}
								style={style.title}
								placeholder='click to enter content'
								onValueClick={(val) => updateAtom({id:atom.id, editing:true})}
          			onEdit={(val) => updateAtom({id:atom.id, content:val,editing:false})}>
          			<span className="value">{atom.content}</span>
          		</Editable>
					 </div>
	}
}