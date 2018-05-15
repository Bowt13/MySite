import React, {PureComponent} from 'react'

import './Project.css';

class Project extends PureComponent {

  render() {
    return (
      <div className='project'>
        <h3 className='project-title'>-{this.props.name}</h3>
        <p className='project-tag'>Frontend:</p><img className='github-icon' link={this.props.urlFrontend} src={require('../../img/icons/github.png')}></img>
        
        <p className='project-tag'>Backend:</p><img className='github-icon' link={this.props.urlBackend} src={require('../../img/icons/github.png')}></img>
        <p>{this.props.explain}</p>
        <img className='project-image' src={this.props.imgUrl}></img>
      </div>
    );
  }
}

export default Project;
