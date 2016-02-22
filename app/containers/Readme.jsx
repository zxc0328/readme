import React from 'react';
import Panel from '../components/Panel.jsx';
import Canvas from '../components/Canvas.jsx';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {connect} from 'react-redux'

@connect((state) => ({
  global: state.global
}), {
})
@DragDropContext(HTML5Backend)
export default class Readme extends React.Component {
  render() {
  	const { global } = this.props
    return (
      <div>
      	{global.editing ? <Panel />:null}
				<Canvas />
      </div>
    );
  }
}