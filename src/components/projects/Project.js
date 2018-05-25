import React, {PureComponent} from 'react'

import './Project.css';

class Project extends PureComponent {

  handleIconClick = (url) => {
    window.open(url)
  }

  render() {
    return (
      <div className='project'>
        <img className='project-image' src={this.props.imgUrl}></img>
        <p className='project-tag'>Frontend:</p><img className='github-icon' onClick={_ => this.handleIconClick(this.props.urlFrontend)} src={require('../../img/icons/github.png')}></img>

        <p className='project-tag'>Backend:</p><img className='github-icon' link={this.props.urlBackend} src={require('../../img/icons/github.png')}></img>
        <p className='project-explain'>{this.props.explain}</p>
      </div>
    );
  }
}

export default Project;
