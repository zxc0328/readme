import React from 'react';
import Panel from '../components/Panel.jsx';
import Canvas from '../components/Canvas.jsx';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class Readme extends React.Component {
  render() {

    return (
      <div>
      	<Panel />
				<Canvas />
      </div>
    );
  }
}