import React from 'react';

export default class NavBar extends React.Component {
	render() {
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
								<i id="preview" className="navbar_icon material-icons">play_arrow</i>
								<div className="mdl-tooltip" htmlFor="preview">
								Preview
								</div>
								<i id="download" className="navbar_icon material-icons">cloud_download</i>
								<div className="mdl-tooltip" htmlFor="download">
								Download PDF
								</div>
								<i id="save" className="navbar_icon material-icons">save</i>
								<div className="mdl-tooltip" htmlFor="save">
								Save
								</div>
							</div>
					 </div>
	}
}