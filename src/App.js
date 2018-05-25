import React, { PureComponent } from 'react';
import './App.css';

//Containers
  import Sidebar from './containers/Sidebar.js'
  import IntroScreen from './containers/IntroScreen.js'
  //Cards
  import SkillsCard from './containers/cards/SkillsCard.js'
  import ProfileCard from './containers/cards/ProfileCard.js'
  import ProjectCard from './containers/cards/ProjectCard.js'
  //games
  import SpaceShooter from './containers/games/spaceShooter/Game.js'

  import MachineCabinet from './containers/machine/MachineCabinet.js'

class App extends PureComponent {
  state={
    //visabilaty//
      introScreen: 'visable',
      sidebarVisability: 'hidden',
      profileInfo: 'hidden',
      skills: 'hidden',
      project: 'hidden',
      onePlayer: 'hidden',
    //controlls/
      joystick: '',
      arcadeButton: 'unpressed',
    //misc//
      sidebarType: 'default',
      counter: 0,
      sidebar: 'bio',
      chevronTop: 'off',
      chevronBottom: 'off',
      game: false,
      projectName: '',
      time: false,
      seconds: 10*1000,
  }

  handleMachine = (event) => {
    event.preventDefault
    if(this.state.introScreen === 'visable' && this.state.time){
      this.setState({
        introScreen: 'between',
      })
      setTimeout(this.handleIntroScreen, 1900)
    }
  }

  handleClick = (type, value) => {
    if(type === 'projects'){
      switch (value) {
        case 'visable':
          this.setState({
            sidebarType: 'projects'
          })
          //Not needed in Alphav0.8
          //setTimeout(function() {document.getElementById('RPS').focus()}, 50)
          document.getElementById('machine').focus()
          break;
        case 'back':
          this.setState({
            sidebarType: 'default'
          })
          //Not needed in Alphav0.8
          //setTimeout(function() {document.getElementById('bio').focus()}, 50)
          document.getElementById('machine').focus()
          break;
        case 'RPS':
          this.setState({
            projectName: 'RPS',
          })
        default:
          break;
      }
    }
    else{
      this.setState({
        [type]: value
      })
    }
    }

  handleKeydown = (event) => {
    switch (event.key) {
      //DOWN//
      case "ArrowDown": case "s":
        this.setState({
          joystick: 'down',
        })
        switch (document.activeElement.id) {
          case 'machine':
            if(document.getElementById('bio')){
              document.getElementById('bio').focus()
            }
            if(document.getElementById('RPS')){
              document.getElementById('RPS').focus()
            }
            break;
          case 'bio':
            document.getElementById('skills').focus()
            break;
          case 'skills':
            document.getElementById('projects').focus()
            break;
          case 'skill-card-body':
            this.scrollDown()
            this.setState({
              chevronBottom: 'on',
            })
            break;
          case 'projects':
            //document.getElementById('games').focus()
            break;
          case 'project-card-body':
            this.scrollDown()
            this.setState({
              chevronBottom: 'on',
            })
            break;
          case 'RPS':
            document.getElementById('SEA').focus()
            break;
          case 'SEA':
            document.getElementById('back').focus()
            break;
          default:
          break;
        }
        break;

      //UP//
      case "ArrowUp": case "w":
        this.setState({
          joystick: 'up'
        })
        switch (document.activeElement.id) {
          case 'machine':
            if(document.getElementById('bio')){
            document.getElementById('bio').focus()}
            break;
          case 'skills':
            document.getElementById('bio').focus()
            break;
          case 'skill-card-body':
            this.scrollUp()
            this.setState({
              chevronTop: 'on',
            })
            break;
          case 'projects':
            document.getElementById('skills').focus()
            break;
          case 'project-card-body':
            this.scrollUp()
            this.setState({
              chevronTop: 'on',
            })
            break;
          case 'games':
            document.getElementById('projects').focus()
            break;
          case 'SEA':
            document.getElementById('RPS').focus()
            break;
          case 'back':
            document.getElementById('SEA').focus()
            break;
          default:
          break;
        }
        break;

      //LEFT//
      case "ArrowLeft": case "a":
        this.setState({
          joystick: 'left',
          chevronBottom: 'off',
          chevronTop: 'off',
        })
        if(this.state.profileInfo === 'visable'){
          if(document.activeElement.id === 'buttonUp' || document.activeElement.id === 'buttonDown'){
            document.getElementById(this.state.sidebar).focus()
            document.getElementById('bio').click()
          }
        }
        if(this.state.skills === 'visable'){
          if(document.activeElement.id === 'skill-card-body'){
            document.getElementById(this.state.sidebar).focus()
            //document.getElementById('skills').click()
          }
        }
        if(this.state.projects === 'visable'){
          if(document.activeElement.id === 'buttonUp' || document.activeElement.id === 'buttonDown'){
            document.getElementById(this.state.sidebar).focus()
            //document.getElementById('projects').click()
          }
        }
        if(this.state.onePlayer === 'visable'){
          if(document.activeElement.id === 'buttonUp' || document.activeElement.id === 'buttonDown'){
            console.log(this.state.sidebar);
            document.getElementById(this.state.sidebar).focus()
            //document.getElementById('games').click()
          }
        }
        break;

      //RIGHT//
      case "ArrowRight": case "d":
        this.setState({
          joystick: 'right'
        })
        if(document.activeElement.id !== 'skill-card-body' || document.activeElement.id !== 'project-card-body'){
          this.setState({
            sidebar: document.activeElement.id
          })
          if(this.state.skills === 'visable') {
            document.getElementById('skill-card-body').focus()
          }
          if(this.state.projects === 'visable') {
            document.getElementById('project-card-body').focus()
          }
        }
        break;

      //ACCEPT//
      case " ": case "Enter":
        this.setState({
          arcadeButton: 'pressed',
          lastClick: document.activeElement.id
        })
        if (document.activeElement.id === 'project-card-body'){
          if(document.getElementById('project-card-body').scrollTop < 287.5)
          this.setState({
            sidebarType: 'projects'
          })
        }
        break;
      default:
        return;
    }
  }

  handleKeyUp = (event) => {
    if (event.key === "ArrowDown") {
      this.setState({
        chevronBottom: 'off',
      })
    }
    if (event.key === "ArrowUp") {
      this.setState({
        chevronTop: 'off',
      })
    }
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
      if(this.state.introScreen === 'visable' && this.state.time){
        this.setState({
          introScreen: 'between',
        })
        setTimeout(this.handleIntroScreen, 1900)
      }
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

  handleScrollClick = (dir) => {
    var scrolling
    switch (dir) {
      case 'up':
        this.scrollUp()
        this.setState({
          chevronTop: 'on',
        })
        break;
      case 'down':
        // scrolling = setInterval(this.scrollDown, 100)
        this.setState({
          chevronBottom: 'on',
        })
        // while(this.state.chevronBottom === 'on'){
        //   setTimeout(console.log(1), 100)
        //   setTimeout(this.scrollDown, 100)
        // }
        break;
      case 'cancel':
      console.log('cancel');
        clearInterval(scrolling)
        this.setState({
          chevronBottom: 'off',
        })
        break;
      default:

    }
  }

  scrollUp = () => {
    console.log('scrollin');
    if(document.getElementById('skill-card-body')){
      document.getElementById('skill-card-body').scrollBy(0, -13)
      console.log('ifwurks');
    }
    // if(document.getElementById('project-card-body')){
    //   document.getElementById('project-card-body').scrollBy(0, -13)
    //   console.log(document.getElementById('project-card-body').scrollTop)
    // }
  }

  scrollDown = () => {
    if(document.getElementById('skill-card-body')){
      document.getElementById('skill-card-body').scrollBy(0, 13)
    }
    if(document.getElementById('project-card-body')){
      document.getElementById('project-card-body').scrollBy(0, 13)
      console.log(document.getElementById('project-card-body').scrollTop)
    }
  }

  handleIntroScreen = () => {
    this.setState({
      introScreen: 'hidden',
      sidebarVisability: 'visable'
    })
  }

  componentDidMount() {
    document.getElementById('machine').focus()
    setTimeout(function() { this.setState({
      time: true
    }); }.bind(this), this.state.seconds)
  }

  render() {
    return (
        <div
          className='machine'
          id='machine'
          tabindex="0"
          onKeyDown={this.handleKeydown}
          onKeyUp={this.handleKeyUp}
          onClick={this.handleMachine}
        >
        <div className='screen-holder' onClick={this.handleMachine}>
          <div className='screen'>
            <div className='screen-noise-effect'></div>
            <div className='screen-scan-effect'></div>
            <div className='screen-blur-effect'>
            {!this.state.game &&
              <div>
              <IntroScreen visabilaty={this.state.introScreen}/>
              <Sidebar
                type={this.state.sidebarType}
                handleClick={this.handleClick}
                cardState={{skills: this.state.skills, bio: this.state.profileInfo, projects: this.state.projects}}
                visabilaty={this.state.sidebarVisability}/>
              <ProfileCard card={this.state.profileInfo}/>
              <SkillsCard
                card={this.state.skills}
                chevronTop={this.state.chevronTop}
                chevronBottom={this.state.chevronBottom}
                chevClick={this.handleScrollClick}
              />
              <ProjectCard
                card={this.state.project}
                project={'RPS'}
                chevronTop={this.state.chevronTop}
                chevronBottom={this.state.chevronBottom}
              />
              </div>
            }
            {this.state.game &&
              <SpaceShooter/>
            }
            </div>
          </div>
        </div>
        {false &&
          <MachineCabinet joystick={this.state.joystick.toLowerCase()} arcadeButton={this.state.arcadeButton}/>
        }
      </div>
    );
  }
}

export default App;
