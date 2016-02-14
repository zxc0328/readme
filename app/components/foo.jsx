import React from "react";
import ReactDOM from "react-dom";

class Foo extends React.Component{
	constructor(){
		super();
		this.state = {foo:0};
		this.counter = this.counter.bind(this);
		setInterval(this.counter, 1000)
	}
	counter(){
		this.setState({foo:this.state.foo-10});
	}
	render(){
		return <div>{ this.state.foo }</div>
	}
}

module.exports = Foo;