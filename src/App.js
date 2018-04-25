import React, { PureComponent } from 'react';
import './App.css';

//Containers
  import SkillsCard from './containers/SkillsCard.js'
  import SideBar from './containers/SideBar.js'

class App extends PureComponent {
  state={
    skill: 'hidden',
  }

    handleClick = (type, value) => {
      this.setState({
        [type]: value
      })
    }

  render() {
    return (
      <div style={{
        position: 'absolute',
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#263238',
      }}>
        <SideBar handleClick={this.handleClick} cardState={this.state.skill}/>
        <SkillsCard card={this.state.skill}/>
      </div>
    );
  }
}

export default App;
