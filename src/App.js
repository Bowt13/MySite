import React, { PureComponent } from 'react';
import './App.css';

//Containers
  import SideBar from './containers/SideBar.js'
  //Cards
  import SkillsCard from './containers/cards/SkillsCard.js'
  import ProfileCard from './containers/cards/ProfileCard.js'
  import ProjectsCard from './containers/cards/ProjectsCard.js'

  import Dashboard from './containers/machine/Dashboard.js'
  import MachineCabinet from './containers/machine/MachineCabinet.js'

class App extends PureComponent {
  state={
    profileInfo: 'hidden',
    skills: 'hidden',
    projects: 'hidden',
    onePlayer: 'hidden',
    joystick: '',
    arcadeButton: 'unpressed',
    counter: 0,
    sidebar: 'bio',
  }

  handleMachine = (event) => {
    event.preventDefault
    if(event.nativeEvent.screenX === 0){
      return
    }
    else {
      document.getElementById('bio').focus()
    }
  }

  handleClick = (type, value) => {
      this.setState({
        [type]: value
      })
      console.log(this.state)
    }

  handleKeydown = (event) => {
    switch (event.key) {
      case "ArrowDown": case "s":
        this.setState({
          joystick: 'down',
        })
        switch (document.activeElement.id) {
          case 'machine':
            document.getElementById('bio').focus()
            break;
          case 'bio':
            document.getElementById('skills').focus()
            break;
          case 'skills':
            document.getElementById('projects').focus()
            break;
          case 'projects':
            document.getElementById('1Player').focus()
            break;
          default:
          break;
        }
        break;
      case "ArrowUp": case "w":
        this.setState({
          joystick: 'up'
        })
        switch (document.activeElement.id) {
          case 'machine':
            document.getElementById('bio').focus()
            break;
          case 'skills':
            document.getElementById('bio').focus()
            break;
          case 'projects':
            document.getElementById('skills').focus()
            break;
          case '1Player':
            document.getElementById('projects').focus()
            break;
          default:
          break;
        }
        break;
      case "ArrowLeft": case "a":
        this.setState({
          joystick: 'left'
        })
        if(this.state.profileInfo === 'visable'){
          if(document.activeElement.id === 'buttonUp' || document.activeElement.id === 'buttonDown'){
            document.getElementById(this.state.sidebar).focus()
            document.getElementById('bio').click()
          }
        }
        if(this.state.skills === 'visable'){
          if(document.activeElement.id === 'buttonDown'){
            document.getElementById(this.state.sidebar).focus()
            document.getElementById('skills').click()
          }
          if(document.activeElement.id === 'buttonUp'){
            document.getElementById('buttonDown').focus()
          }
        }
        if(this.state.projects === 'visable'){
          if(document.activeElement.id === 'buttonUp' || document.activeElement.id === 'buttonDown'){
            document.getElementById(this.state.sidebar).focus()
            document.getElementById('projects').click()
          }
        }
        if(this.state.onePlayer === 'visable'){
          if(document.activeElement.id === 'buttonUp' || document.activeElement.id === 'buttonDown'){
            console.log(this.state.sidebar);
            document.getElementById(this.state.sidebar).focus()
            document.getElementById('1Player').click()
          }
        }
        break;
      case "ArrowRight": case "d":
        this.setState({
          joystick: 'right'
        })
        if(document.activeElement.id !== 'buttonDown' && document.activeElement.id !== 'buttonUp'){
          this.setState({
            sidebar: document.activeElement.id
          })
          if(this.state.skills === 'visable') {
            document.getElementById('buttonDown').focus()
          }
        }else {
          if(document.activeElement.id === 'buttonDown' && this.state.skills === 'visable'){
            document.getElementById('buttonUp').focus()
          }
        }
        break;

      case " ": case "Enter":
        this.setState({
          arcadeButton: 'pressed',
          lastClick: document.activeElement.id
        })
        switch (document.activeElement.id) {
          case 'buttonUp':
            this.setState({
              counter: this.state.counter - 1
            })
            console.log(this.state.counter)
            if (this.state.counter > 1) {
              setTimeout(function () {document.getElementById('buttonUp').focus()}, 670)
              setTimeout(this.handleKeyUp, 30)
            }
            else {
              setTimeout(function () {document.getElementById('buttonDown').focus()}, 670)
              setTimeout(this.handleKeyUp, 30)
            }
            break;
          case 'buttonDown':
            this.setState({
              counter: this.state.counter + 1
            })
            if (this.state.counter < 4) {
              setTimeout(function () {document.getElementById('buttonDown').focus()}, 670)
              setTimeout(this.handleKeyUp, 30)
            }
            else {
              setTimeout(function () {document.getElementById('buttonUp').focus()}, 670)
              setTimeout(this.handleKeyUp, 30)
            }
            break;
          default:
            break;
        }
        // if (document.activeElement.id === 'buttonDown' && this.state.counter < 4) {
        //   this.setState({
        //     counter: this.state.counter + 1
        //   })
        //   setTimeout(function () {document.getElementById('buttonDown').focus()}, 670)
        //   setTimeout(this.handleKeyUp, 30)
        // }
        // if (document.activeElement.id === 'buttonUp' && this.state.counter > 0) {
        //   this.setState({
        //     counter: this.state.counter - 1
        //   })
        //   setTimeout(function () {document.getElementById('buttonUp').focus()}, 670)
        //   setTimeout(this.handleKeyUp, 30)
        //   }
        // if (document.activeElement.id !== 'buttonUp' && document.activeElement.id !== 'buttonDown'){
        //   this.setState({
        //     sidebar: document.activeElement.id,
        //   })
        // }
        break;
      default:
        return;
    }
  }

  handleKeyUp = (event) => {
    if (!event){
      this.setState({
        arcadeButton: 'unpressed',
      })
      return;
    }
    if (event.key === 'Enter' || event.key === ' '){
      this.setState({
        arcadeButton: 'unpressed',
      })
    }
    if (event.key === ' '){
      this.setState({
        arcadeButton: 'unpressed',
      })
      if(document.activeElement.id !== 'buttonDown' || document.activeElement.id !== 'buttonUp'){
        document.getElementById(this.state.lastClick).focus()
        document.getElementById(this.state.lastClick).click()
      }
      if (document.getElementById('buttonDown') && document.activeElement.id === 'buttonDown' && this.state.counter <= 4){
        setTimeout(function () {document.getElementById('buttonDown').focus()}, 670)
      }
      if (document.getElementById('buttonDown') && document.activeElement.id === 'buttonDown' && this.state.counter === 5){
        setTimeout(function () {document.getElementById('buttonUp').focus()}, 670)
      }
    }
    this.setState({
      joystick: '',
    })
  }

  render() {
    return (
      <div className='machine' id='machine' tabindex="0"
        onKeyDown={this.handleKeydown}
        onKeyUp={this.handleKeyUp}
        onClick={this.handleMachine}
      >
        <div className='screen-holder'>
          <div className='screen'>
            <SideBar handleClick={this.handleClick} cardState={this.state.skills}/>
            <SkillsCard card={this.state.skills}/>
            <ProfileCard card={this.state.profileInfo}/>
            <ProjectsCard card={this.state.projects}/>
          </div>
        </div>
        <Dashboard joystick={this.state.joystick.toLowerCase()} arcadeButton={this.state.arcadeButton}/>
        <MachineCabinet/>
      </div>
    );
  }
}

export default App;
