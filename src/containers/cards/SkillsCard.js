import React, { PureComponent } from 'react'

import Skill from '../../components/skills/Skill.js'
import { skills } from '../../data/data.js'

import './Card.css'
import './SkillsCard.css'

class SkillsCard extends PureComponent {
	state = {
		counter: 0,
		dissed: false
	}

	MouseHold = func => {
		var mouseStatus = 'up'
		var mouseTimeout
		let images = document.getElementsByTagName('img')
		images = Array.prototype.slice.call(images)

		console.log(images)
		console.log(Array.isArray(images))

		if (Array.isArray(images)) {
			const chevrons = images.filter(
				img => img.name === 'up' || img.name === 'down'
			)
			chevrons.forEach(img => {
				img.addEventListener(
					'mousedown',
					function() {
						func(img.name)
					},
					false
				)
				img.addEventListener(
					'mouseup',
					function() {
						func('cancel')
					},
					false
				)
			})
		}
	}
	componentDidMount() {
		this.MouseHold(this.props.chevClick)
	}

	render() {
		const { card, chevClick } = this.props
		return (
			<div className="card">
				<div className={`card-${card}`}>
					<div className="card-header">
						<p className="card-title">
							Skills:<br />
						</p>
					</div>
					<div className="card-body" id="skill-card-body">
						{skills.map(skill => (
							<div className="skills-body-content">
								<Skill name={skill.name} percentage={skill.percentage} />
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default SkillsCard
