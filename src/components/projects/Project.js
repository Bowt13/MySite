import React, { PureComponent } from 'react'

import './Project.css'

class Project extends PureComponent {
	handleIconClick = url => {
		window.open(url)
	}

	handleClick = url => {
		let win
		win = window.open('url')
		win.focus()
	}

	render() {
		const { imgUrl, urlFrontend, urlBackend, explain } = this.props
		return (
			<div className="project">
				<div className="project-image-">
					<img className="project-image" src={imgUrl} />
				</div>
				{urlFrontend.length > 0 && (
					<div>
						<p
							className="icon-tag"
							onClick={_ => this.handleIconClick(urlFrontend)}>
							Frontend:
						</p>
						<img
							className="clickable-icon"
							onClick={_ => this.handleIconClick(urlFrontend)}
							src={require('../../img/icons/github.png')}
						/>
					</div>
				)}
				{urlBackend.length > 0 && (
					<div>
						<p
							className="icon-tag"
							onClick={_ => this.handleIconClick(urlBackend)}>
							Backend:
						</p>
						<img
							className="clickable-icon"
							onClick={_ => this.handleIconClick(urlBackend)}
							src={require('../../img/icons/github.png')}
						/>
					</div>
				)}
				<div className="project-explain-container">
					<p className="project-explain">{explain}</p>
				</div>
			</div>
		)
	}
}

export default Project
