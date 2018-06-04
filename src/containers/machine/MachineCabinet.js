import React, { Component } from 'react'

import './MachineCabinet.css'

//Components
import Dashboard from '../../components/dashboard/Dashboard.js'

class MachineCabinet extends Component {
	render() {
		return (
			<div className="cabinet">
				<div className="toppanel" />
				<Dashboard
					joystick={this.props.joystick.toLowerCase()}
					arcadeButton={this.props.arcadeButton}
				/>

				<div className="left-toppanel-side" />
				<div className="remover1" />
				<div className="left-toppanel-side-botom" />
				<div className="left-toppanel-front" />

				<div className="right-toppanel-side" />
				<div className="remover2" />
				<div className="right-toppanel-side-botom" />
				<div className="right-toppanel-front" />

				<div className="left-sidepanel-top" />
				<div className="left-sidepanel-top-top" />
				<div className="left-frontpanel" />
				<div className="left-sidepanel-bottom" />
				<div className="left-sidepanel-bottom-top" />

				<div className="right-sidepanel-top" />
				<div className="right-sidepanel-top-top" />
				<div className="right-frontpanel" />
				<div className="right-sidepanel-bottom" />
				<div className="right-sidepanel-bottom-top" />
			</div>
		)
	}
}

export default MachineCabinet
