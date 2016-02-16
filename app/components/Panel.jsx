import React from 'react';
import {connect} from 'react-redux';
import ItemProto from './ItemProto.jsx';

export default class Panel extends React.Component {
	render() {
		return <div>
						<ItemProto type={1}/>
						<ItemProto type={3}/>
					 </div>
	}
}