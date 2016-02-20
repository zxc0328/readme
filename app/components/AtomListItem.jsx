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
		const { updateAtom, atom } = this.props
		return <div className="list_item">
							<Editable
							  key={0}
          			value={atom.title}
								style={style.title}
								inputType={0}
								placeholder='click to enter title'
								onValueClick={(val) => updateAtom({editing:true})}
          			onEdit={(val) => updateAtom({id:atom.id, title:val,editing:false})} />
          		<Editable
          		  key={1}
          		  style={style.content}
          		  inputType={1}
          			value={atom.description}
          			placeholder='click to enter description'
          			onValueClick={(val) => updateAtom({editing:true})}
          			onEdit={(val) => updateAtom({id:atom.id, description:val,editing:false})} />
					 </div>
	}
}