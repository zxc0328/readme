import React from 'react';
import {connect} from 'react-redux';
import ItemProto from './ItemProto.jsx';
import {switchEdit} from '../actions/global'

@connect(() => ({
}), {
	switchEdit
})
export default class Panel extends React.Component {
	render() {
		const { switchEdit } = this.props
		return <div className="panel">
							<div className="panel_info">
								<div className="panel_avatar">
										<img src="http://7oxh2b.com1.z0.glb.clouddn.com/guapi.png" alt="avatar"/>
								</div>
								<img src="http://7oxh2b.com1.z0.glb.clouddn.com/readme_bg2.png" alt="bg"/>
							</div>
						<div className="panel_container">
							<div className="panel_section">
								<div className="panel_section_title">
									<i className="navbar_icon material-icons">view_list</i>
									<span>Components</span>
								</div>
								<div className="panel_section_body">
									<ItemProto type={0} description={'List-vertical'}/>
									<ItemProto type={4} description={'Info'}/>
									<ItemProto type={2} description={'List without title'}/>
									<ItemProto type={3} description={'SVG Bar'}/>
								</div>
							</div>
							<div>
								<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={() => {switchEdit(false)}}>PREVIEW</button>
							</div>
						</div>
					 </div>
	}
}