import React from 'react';
const marked = require('marked');

export default class Editable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing:false,value:this.props.value}
  }
  render() {
    const {value, onEdit, onValueClick, ...props} = this.props;
    return (
      <div {...props}>
        {(this.state.editing || this.state.value === '') ? this.renderEdit() : this.renderValue()}
      </div>
    )
  }
  renderEdit = () => {
    const { inputType } = this.props;
    switch (inputType) {
      case 'textarea':
        return <textarea type="text"
        autoFocus={true}
        defaultValue={this.state.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        placeholder={this.props.placeholder}/>
      case 'text':
        return <input type="text"
        autoFocus={true}
        defaultValue={this.state.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        placeholder={this.props.placeholder}/>;
      case 'range':
        return <div>
                <input type="range" defaultValue={this.state.value} onChange={this.onRangeChange}/>
                <div onClick={this.finishRangeEdit}>done</div>
               </div>
      default:
        return
    }
  }
  renderValue = () => {
    return (
      <div onClick={this.onValueClick} style={this.props.style}>
       { this.props.children }
      </div>
    )
  }
  // fix endless rendering in safari
  shouldComponentUpdate (nextProps, nextState) {
    return (nextProps != this.props) || (nextState != this.state)
  }
  onValueClick = () => {
    this.props.onValueClick()
    this.setState({editing:true})
  }
  checkEnter = (e) => {
    if (!this.state.editing){
      this.setState({editing:true})
    }
    if(e.key === 'Enter') {
      this.finishEdit(e)
    }
  }

  onRangeChange = (e) => {
    this.setState({value:e.target.value.trim()})
  }
  
  finishRangeEdit = (e) => {
    this.setState({editing:false})
    const value = this.state.value
    if(this.props.onEdit) {
      this.props.onEdit(value)
    }
  } 

  finishEdit = (e) => {
    this.setState({editing:false,value:e.target.value})
    const value = e.target.value

    if(this.props.onEdit && value.trim()) {
      this.props.onEdit(value)
    }
  }
}
