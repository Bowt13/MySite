import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {

  handleClick = (type) => {
    switch (type) {
      case 'profileInfo':
      console.log(type)
        this.props.handleClick('profileInfo', 'visable')
        this.props.handleClick('skills', 'hidden')
        this.props.handleClick('projects', 'hidden')
        break;
      case 'skills':
        this.props.handleClick('profileInfo', 'hidden')
        this.props.handleClick('skills', 'visable')
        this.props.handleClick('projects', 'hidden')
        break;
      case 'projects':
        this.props.handleClick('profileInfo', 'hidden')
        this.props.handleClick('skills', 'hidden')
        this.props.handleClick('projects', 'visable')
        break;
      default:
        console.log(type)
        break;
    }
  }

  componentDidMount(){
    this.bio.focus();
  }

  render() {
    return (
      <div className='sideBar'>
        <button id='bio' ref={(bio) => { this.bio = bio; }} className='sideBar-button'
        onClick={_ => this.handleClick('profileInfo')}>Bio</button>
        <button id='skills' className='sideBar-button' onClick={_ => this.handleClick('skills')}>Skills</button>
        <button id='projects' className='sideBar-button' onClick={_ => this.handleClick('projects')}>Projects</button>
        <button id='1Player' className='sideBar-button' onClick={_ => this.handleClick('card')}>1 Player</button>
      </div>
    );
  }
}

export default SideBar;
