import React, {PureComponent} from 'react'

import Project from '../../components/projects/Project.js'

import './Card.css'
import './ProjectsCard.css';

class ProjectsCard extends PureComponent {
  state = {
    counter: 0,
    dissed: false,
  }

  render() {
    const projects = [
      { name: 'Rock Paper Soldiers',
        explain: 'Rock Paper Soldiers is a online multiplayer "rock paper scicor" like game.',
        imgUrl: require('../../img/TEST.gif'),
        urlFrontend: 'https://github.com/Bowt13/Rock.Paper.Soldiers_Frontend',
        explainFrontend: '',
        urlBackend: 'https://github.com/Bowt13/Rock.Paper.Soldiers_Backend',
        explainBackend: '',
      },
      { name: 'Student Evaluation App',
        explain: '',
        imgUrl: require('../../img/TEST.gif'),
        urlFrontend: 'https://github.com/Bowt13/StudentEvaluationFE',
        explainFrontend: '',
        urlBackend: '??',
        explainBackend: '',
      },
      { name: 'Flexicon Order Manager',
        explain: '',
        imgUrl: require('../../img/TEST.gif'),
        urlFrontend: 'https://github.com/Bowt13/frontend-RLP',
        explainFrontend: '',
        urlBackend: 'https://github.com/Bowt13/Rock.Paper.Soldiers_Backend',
        explainBackend: '',
      },
    ]
    const {ul} = this.state
    const {card} = this.props
    console.log(`ul-${ul}`);
    return (
      <div className='card'>
        <div className={`card-${card}`}>
          <div className= 'card-header'>
              <p className= 'card-title'>
                Projects:<br/>
              </p>
          </div>
          <img className={`chevron-top-${this.props.chevronTop}`} src={require(`../../img/chevron-${this.props.chevronTop}.gif`)} alt="chevron"/>
          <div className='card-body' id='project-card-body' tabindex='10'>
            {projects.map(project => (
              <div className='projects-body-content'>
                <Project
                  name={project.name}
                  explain={project.explain}
                  imgUrl={project.imgUrl}
                  urlFrontend={project.urlFrontend}
                  urlBackend={project.urlBackend}
                />
              </div>
            ))}
          </div>
          <img className={`chevron-bottom-${this.props.chevronBottom}`} src={require(`../../img/chevron-${this.props.chevronBottom}.gif`)} alt="chevron"/>
        </div>
      </div>
    );
  }
}

export default ProjectsCard;
