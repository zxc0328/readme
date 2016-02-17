import React from 'react';
import {DragSource} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const itemSource = {
  beginDrag(props) {
    return {
      type: props.type
    };
  }
};

@DragSource(ItemTypes.ITEM, itemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource()
}))
export default class ItemProto extends React.Component {

	render() {
		const { connectDragSource } = this.props
		return connectDragSource(<div className="item_proto">
			Type: { this.props.type }</div>)
	}
}