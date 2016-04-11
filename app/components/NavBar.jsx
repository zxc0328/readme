import React from 'react';
import {connect} from 'react-redux'
import superagent from 'superagent'

@connect((state) => ({
	allState: state,
}), {
})
export default class NavBar extends React.Component {
	onGetPdfClick() {
		const { allState } = this.props
			superagent
  		.post('/getpdf')
  		.send({ state:JSON.stringify(allState)})
  		.set('Accept', 'application/json')
  		.end(function(err, res){
  			window.location.href = '/pdf/' + JSON.parse(res.text).fileName
  		})
	}
	render() {
		const { allState } = this.props
		return <div className="navbar">
							<div className="navbar_logo navbar_item">README</div>
							<div className="navbar_preview navbar_item">
								<i id="undo" className="navbar_icon material-icons">undo</i>
								<div className="mdl-tooltip" htmlFor="undo">
								Undo
								</div>
								<i id="redo" className="navbar_icon material-icons">redo</i>
								<div className="mdl-tooltip" htmlFor="redo">
								Redo
								</div>
								<form  className="navbar_form" action="/gethtml" method="POST">
									<input type="hidden" id="stateString" name="state" />
									<button id="preview" className="navbar_icon material-icons navbar_btn" type="submit"
									onClick={() => document.getElementById("stateString").value = JSON.stringify(allState)}>
									play_arrow</button>
									<div className="mdl-tooltip" htmlFor="preview">
									Get online resume
									</div>
									<i id="download" className="navbar_icon material-icons"
									onClick={ () => this.onGetPdfClick() } >cloud_download</i>
									<div className="mdl-tooltip" htmlFor="download">
									Download PDF
									</div>
								</form> 
								<i id="save" className="navbar_icon material-icons">save</i>
								<div className="mdl-tooltip" htmlFor="save">
								Save
								</div>
							</div>
					 </div>
	}
}