import React, { PureComponent } from 'react'

import Project from '../../components/projects/Project.js'
import { projects } from '../../data/data.js'

import './Card.css'
import './ProjectCard.css'

class ProjectCard extends PureComponent {
	state = {
		counter: 0,
		dissed: false
	}

	componentWillMount() {}

	render() {
		let currentProject
		const { ul } = this.state
		const { card, project } = this.props
		switch (project) {
			case 'RPS':
				currentProject = projects[0]

				break
			case 'SEA':
				currentProject = projects[1]
				this.forceUpdate()
				break
			case 'FOM':
				currentProject = projects[2]
				this.forceUpdate()
				break
			default:
				console.warn("project doesn't exist")
		}
		return (
			<div className="card">
				<div className={`card-${card}`}>
					<div className="card-header">
						<p className="card-title">{currentProject.name}</p>
					</div>
					<div className="card-body" id="project-card-body">
						<div className="projects-body-content">
							<Project
								explain={currentProject.explain}
								imgUrl={currentProject.imgUrl}
								urlFrontend={currentProject.urlFrontend}
								urlBackend={currentProject.urlBackend}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProjectCard
