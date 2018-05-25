export handleKeydown = (event) => {
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

export handleKeyUp = (event) => {
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
    if(this.state.introScreen === 'visable'){
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
