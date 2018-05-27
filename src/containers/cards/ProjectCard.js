import React, {PureComponent} from 'react'

import Project from '../../components/projects/Project.js'

import './Card.css'
import './ProjectCard.css';

class ProjectCard extends PureComponent {
  state = {
    counter: 0,
    dissed: false,
  }

  componentWillMount(){
  }

  render() {
    let currentProject
    const projects = [
      { name: 'Rock Paper Soldiers',
        explain: 'Rock Paper Soldiers is a online multiplayer "rock paper scicor" like game. A friend and me made while we where attending Codaisseur. I did the Front-end and my friend did the Back-end',
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
    const {card, project} = this.props
    switch (project) {
      case "RPS":
        currentProject = projects[0]
        break;
      case "SEA":
        currentProject = projects[1]
        break;
      case "FOM":
        currentProject = projects[2]
        break;
      default:
       console.warn("project doesn't exist");
    }
    return (
      <div className='card'>
        <div className={`card-${card}`}>
          <div className= 'card-header'>
              <p className= 'card-title'>
                {currentProject.name}
              </p>
          </div>
          <div className='card-body project-card' id='project-card-body' tabindex='10'>
            <div className='projects-body-content'>
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
    );
  }
}

export default ProjectCard;
