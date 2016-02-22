import React from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lanes from '../components/Lanes.jsx';
import {createLane} from '../actions/lanes';

@DragDropContext(HTML5Backend)
@connect((state) => ({
  lanes: state.lanes
}), {
  createLane
})
export default class App extends React.Component {
  render() {
    const {lanes, createLane} = this.props;

    return (
      <div>
        <button className="add-lane"
          onClick={createLane.bind(null, {
            name: 'New lane'
          })}>+b</button>
        <Lanes lanes={lanes} />
      </div>
    );
  }
}

<svg width="184px" height="22px" viewBox="0 0 339 40" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
                    <g id="prigressBar">
                    <circle id="Oval-1" fill="#FFFFFF" cx="20" cy="20" r="20"></circle>
                    <circle id="Oval-1-Copy" fill="#D8D8D8" cx="319" cy="20" r="20"></circle>
                    <rect id="Rectangle-1" fill="#D8D8D8" x="20" y="0" width="299" height="40"></rect>
                    <rect id="Rectangle-1-Copy" fill="#FFFFFF" x="20" y="0"  width={width} height="40"></rect>
                  </g>
                  </g>
                </svg>