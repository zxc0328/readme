import React from 'react';
import {connect} from 'react-redux';
import ItemProto from './ItemProto.jsx';
import {switchEdit} from '../actions/global'

@connect(() => ({
}), {
	switchEdit
})
export default class Panel extends React.Component {
	render() {
		const { switchEdit } = this.props
		return <div className="panel">
						<div className="panel_container">
							<div className="panel_container_title">Drag the item below to the resume</div>
							<ItemProto type={0} description={'Item List with title'}/>
							<ItemProto type={1} description={'Avatar Item'}/>
							<ItemProto type={2} description={'Item List without title'}/>
							<div>
								<button onClick={() => {switchEdit(true)}}>EDIT</button>
								<button onClick={() => {switchEdit(false)}}>PREVIEW</button>
							</div>
						</div>
					 </div>
	}
}