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
		const { connectDragSource, ...props} = this.props
		return connectDragSource(<div {...props} className="item_proto">
			Drag me to add item to the resume</div>)
	}
}