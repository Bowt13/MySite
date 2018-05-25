import React, {PureComponent} from 'react'

import './Project.css';

class Project extends PureComponent {

  handleIconClick = (url) => {
    console.log(url)
    window.open(url)
  }

  render() {
    return (
      <div className='project'>
        <div className='project-image-'>
          <img className='project-image' src={this.props.imgUrl}></img>
        </div>
        <p className='project-tag' onClick={_ => this.handleIconClick(this.props.urlFrontend)}>Frontend:</p><img className='clickable-icon' onClick={_ => this.handleIconClick(this.props.urlFrontend)} src={require('../../img/icons/github.png')}></img>

        <p className='project-tag'>Backend:</p><img className='clickable-icon' link={this.props.urlBackend} src={require('../../img/icons/github.png')}></img>
        <div className='project-explain-container'>
          <p className='project-explain'>{this.props.explain}</p>
        </div>
      </div>
    );
  }
}

export default Project;
