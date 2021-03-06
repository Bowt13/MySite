import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
	state = {
		bio: false,
		skills: false,
		projects: false
	}

	componentDidMount() {
		if (this.props.type === 'default') {
			document.getElementById('bio').focus
		}
	}

	handleClick = type => {
		switch (type) {
			case 'profileInfo':
				console.log(type)
				this.props.handleClick('profileInfo', 'visable')
				this.props.handleClick('skills', 'hidden')
				this.props.handleClick('project', 'hidden')
				this.props.handleClick('rps', 'hidden')
				this.props.handleClick('seapp', 'hidden')
				break
			case 'skills':
				this.props.handleClick('profileInfo', 'hidden')
				this.props.handleClick('skills', 'visable')
				this.props.handleClick('project', 'hidden')
				this.props.handleClick('rps', 'hidden')
				this.props.handleClick('seapp', 'hidden')
				break
			case 'projects':
				this.props.handleClick('projects', 'visable')
				break
			case 'RPS':
				this.props.handleClick('profileInfo', 'hidden')
				this.props.handleClick('skills', 'hidden')
				this.props.handleClick('project', 'visable')
				this.props.handleClick('project', 'RPS')
				break
			case 'SEA':
				this.props.handleClick('profileInfo', 'hidden')
				this.props.handleClick('skills', 'hidden')
				this.props.handleClick('project', 'visable')
				this.props.handleClick('project', 'SEA')
				break
			case 'back':
				this.props.handleClick('projects', 'back')
				break
			default:
				console.log(type)
				break
		}
	}

	render() {
		return (
			<div className="sidebar">
				{this.props.type === 'default' && (
					<div className={`sidebar-${this.props.visabilaty}`}>
						<button id="menu" className="sidebar-button-title" disabled>
							Menu
						</button>
						<button
							id="bio"
							ref={bio => {
								this.bio = bio
							}}
							className="sidebar-button"
							onClick={_ => this.handleClick('profileInfo')}
							disabled={this.state.bio}>
							Bio
						</button>
						<button
							id="skills"
							className="sidebar-button"
							onClick={_ => this.handleClick('skills')}
							disabled={this.state.skills}>
							Skills
						</button>
						<button
							id="projects"
							className="sidebar-button"
							onClick={_ => this.handleClick('projects')}
							disabled={this.state.projects}>
							Projects
						</button>
					</div>
				)}
				{this.props.type === 'projects' && (
					<div className={`sidebar-${this.props.visabilaty}`}>
						<button id="project" className="sidebar-button-title" disabled>
							Projects
						</button>
						<button
							id="RPS"
							className="sidebar-button"
							onClick={_ => this.handleClick('RPS')}
							disabled={this.state.skills}>
							R.P.S.
						</button>
						<button
							id="SEA"
							className="sidebar-button"
							onClick={_ => this.handleClick('SEA')}
							disabled={this.state.projects}>
							S.E.APP
						</button>
						<button
							id="back"
							className="sidebar-button"
							onClick={_ => this.handleClick('back')}>
							Back
						</button>
					</div>
				)}
			</div>
		)
	}
}

export default Sidebar
