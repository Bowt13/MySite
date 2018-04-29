import React, { PureComponent } from 'react';
import './App.css';

//Containers
  import SideBar from './containers/SideBar.js'
  import SkillsCard from './containers/SkillsCard.js'
  import ProfileCard from './containers/ProfileCard.js'

class App extends PureComponent {
  state={
    profileInfo: 'hidden',
    skills: 'hidden',
  }

    handleClick = (type, value) => {
      this.setState({
        [type]: value
      })
      console.log(this.state)
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
        <SideBar handleClick={this.handleClick} cardState={this.state.skills}/>
        <SkillsCard card={this.state.skills}/>
        <ProfileCard card={this.state.profileInfo}/>
      </div>
    );
  }
}

export default App;
