import React from 'react';
import {DragSource} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const itemSource = {
  beginDrag(props) {
    return {
      type: props.type,
      create:true
    };
  }
};

@DragSource(ItemTypes.ITEM, itemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource()
}))
export default class ItemProto extends React.Component {

	render() {
		const { connectDragSource,description,svgFileName } = this.props
		return connectDragSource(
      <div className="item_proto">
        <div className="item_proto_img">
          <img src={"/dist/" + svgFileName + ".svg"} alt="icon"/>
        </div>
        <div className="item_proto_des">{ description }</div>
      </div>)
	}
}