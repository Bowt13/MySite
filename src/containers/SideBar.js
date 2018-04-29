import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {

  handleClick = (type) => {
  switch (type) {
    case 'profileInfo':
    console.log(type)
      this.props.handleClick('profileInfo', 'visable')
      this.props.handleClick('skills', 'hidden')
      break;
    case 'skills':
      this.props.handleClick('skills', 'visable')
      this.props.handleClick('profileInfo', 'hidden')
      break;
    default:
      console.log(type)
      break;
  }

  }
  render() {
    return (
      <div className='sideBar'>
        <button className='sideBar-button' style={{
          marginTop: '4px',
        }} onClick={_ => this.handleClick('profileInfo')}>Profile</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('skills')}>Skills</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
      </div>
    );
  }
}

export default SideBar;
