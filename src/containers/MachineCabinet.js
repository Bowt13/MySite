import React, { Component } from 'react';
import './MachineCabinet.css';

//Components
import Joystick from '../components/Joystick.js'
import ArcadeButton from '../components/ArcadeButton.js'

class Dashboard extends Component {
  render() {
    return (
      <div className='cabinet'>
        <div className='toppanel'></div>

        <div className='left-toppanel-side'></div>
        <div className= 'remover1'></div>
        <div className='left-toppanel-side-botom'></div>
        <div className='left-toppanel-front'></div>

        <div className='right-toppanel-side'></div>
        <div className= 'remover2'></div>
        <div className='right-toppanel-side-botom'></div>
        <div className='right-toppanel-front'></div>

        <div className='left-sidepanel-top'></div>
        <div className='left-sidepanel-top-top'></div>
        <div className='left-frontpanel'></div>
        <div className='left-sidepanel-bottom'></div>
        <div className='left-sidepanel-bottom-top'></div>

        <div className='right-sidepanel-top'></div>
        <div className='right-sidepanel-top-top'></div>
        <div className='right-frontpanel'></div>
        <div className='right-sidepanel-bottom'></div>
        <div className='right-sidepanel-bottom-top'></div>
      </div>
    );
  }
}

export default Dashboard;
