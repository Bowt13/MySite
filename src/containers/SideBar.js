import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {

  handleClick = (type) => {
  switch (type) {
    case 'card':
      switch (this.props.cardState) {
        case 'visable':
          this.props.handleClick('skill', 'hidden')
          break;
        case 'hidden':
          this.props.handleClick('skill', 'visable')
          setTimeout(this.props.handleClick('ul', 'visable'), 1400)
          break;
        default:
          break;
      }
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
        }} onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
        <button className='sideBar-button' onClick={_ => this.handleClick('card')}>Card</button>
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
