import React from 'react';
import {connect} from 'react-redux';
import ItemProto from './ItemProto.jsx';

export default class Panel extends React.Component {
	render() {
		return <div className="panel">
						<div className="panel_container">
							<div className="panel_container_title">Drag the item below to the resume</div>
							<ItemProto type={0}/>
							<ItemProto type={1}/>
							<ItemProto type={2}/>
						</div>
					 </div>
	}
}