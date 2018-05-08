import React, { Component } from 'react';
import './Dashboard.css';

//Components
import Joystick from '../../components/Joystick.js'
import ArcadeButton from '../../components/ArcadeButton.js'

class Dashboard extends Component {
  render() {
    return (
      <div className='board-container'>
        <div className='dashboard-top'>
          <div className='button-box'>
            <ArcadeButton pressed={this.props.arcadeButton}/>
          </div>
        </div>
        <Joystick position={this.props.joystick}/>
        <div className='dashboard-bottom'>
        </div>
      </div>
    );
  }
}

export default Dashboard;
