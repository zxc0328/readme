import React from 'react';

export default class Editable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing:false,value:this.props.value}
  }
  render() {

    const {value, onEdit, onValueClick, ...props} = this.props;
    console.log((this.state.editing || this.state.value === ''))
    return (
      <div {...props}>
        {(this.state.editing || this.state.value === '') ? this.renderEdit() : this.renderValue()}
      </div>
    )
  }
  renderEdit = () => {
    const { inputType } = this.props;
    if (inputType === 1){
      return <textarea type="text"
      ref={
        (e) => e ? e.selectionStart = this.state.value.length : null
      }
      autoFocus={true}
      defaultValue={this.state.value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      placeholder={this.props.placeholder}/>;
    }else{
      return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.state.value.length : null
      }
      autoFocus={true}
      defaultValue={this.state.value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      placeholder={this.props.placeholder}/>;
    }
  }
  renderValue = () => {
    return (
      <div onClick={this.onValueClick} style={this.props.style}>
        <span className="value">{this.state.value}</span>
      </div>
    )
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log(nextProps, this.props)
    return nextProps != this.props
  }
  onValueClick = () => {
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
  finishEdit = (e) => {
    this.setState({editing:false,value:e.target.value})
    const value = e.target.value

    if(this.props.onEdit && value.trim()) {
      this.props.onEdit(value)
    }
  }
}
