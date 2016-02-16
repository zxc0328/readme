import React from 'react';
import {connect} from 'react-redux';
import ItemProto from './ItemProto.jsx';

export default class Panel extends React.Component {
	render() {
		return <div>
						<ItemProto type={0}/>
						<ItemProto type={1}/>
					 </div>
	}
}