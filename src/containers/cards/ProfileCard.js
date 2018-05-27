import React, {PureComponent} from 'react'

import './Card.css'
import './ProfileCard.css';



class ProfileCard extends PureComponent {
  state = {
    counter: 0,
    disabled: false,
  }

  scrollUp = () => {
      if(this.state.counter > 0){
      this.smoothScroll('up')
      this.setState({
        counter: 0,
        disabled: true,
      })
    }
    setTimeout(this.setState({disabled: false}), 20)
  }

  scrollDown = () => {
      if(this.state.counter <5){
      this.smoothScroll('down')
      this.setState({
        counter: this.state.counter+1,
        disabled: true,
      })
    }
    setTimeout(this.setState({disabled: false}), 100000)
  }

  smoothScroll = (type) => {
    let height = document.getElementById('check').clientHeight
    let i = 0
    switch (type) {
      case 'up':
        console.log('1')
        setInterval(function(){if(i !== (16)){document.getElementById('card-body').scrollBy(0, -(height)); i=i+1}}, 30);
        break;
      case 'down':
        setInterval(function(){if(i !== 155){document.getElementById('card-body').scrollBy(0, (height/50)); i=i+1}}, 1);
        break;
      default:
        break;
    }
  }

  handleClick = (type) => {
    let win
    switch (type) {
      case 'linkedIn':
        win = window.open('https://www.linkedin.com/in/nigel-brown-b7983a151/');
        win.focus()
        break;
      case 'gitHub':
        win = window.open('https://github.com/Bowt13/')
        win.focus()
        break;
      default:

    }
  }

  render() {
    const profileInfo = {
      name: 'Nigel Brown',
      birthDate: '13-03-1990',
      placeOfBirth: 'Rotterdam',
      street: 'Larenseweg 34N',
      postcode: '1221 CN',
      city: 'Hilversum',
      nationality: 'Dutch',
      training: 'Full-Stack',
      training2: 'web developer',
      trainingAt: 'Codaisseur Academy',
      linkedIn: 'https://www.linkedin.com/in/nigel-brown-b7983a151/',
    }
    const {ul} = this.state
    const {card} = this.props
    return (
      <div className='card'>
        <div className={`card-${card}`}>
          <div className= 'card-header'>
              <p className= 'card-title'>
                Bio:<br/>
              </p>
          </div>
          <div className='card-body profile-card' id='card-body'>
            <div className='profile-body-content' id='check'>
              <div className='content-left'>
                  <h4 className='content-title'>Personal Info:</h4><br/>
                  <p>
                    Name:<br/>
                    Birthdate:<br/>
                    Place of birth:<br/>
                    Nationality:<br/>
                  </p>
                  <br/>
                  <h4 className='content-title'>Adress:</h4><br/>
                  <p>
                    Street:<br/>
                    City:<br/>
                    Postcode:<br/>
                  </p>
                  <br/>
                  <h4 className='content-title'>Education:</h4><br/>
                  <p>
                    Training:<br/>
                  <br/>
                    At:<br/>
                  </p>
              </div>
              <div className='content-right'>
                  <h4 className='content-title'> </h4><br/>
                  <p>
                    {profileInfo.name}<br/>
                    {profileInfo.birthDate}<br/>
                    {profileInfo.placeOfBirth}<br/>
                    {profileInfo.nationality}<br/>
                  </p>
                  <br/>
                  <h4 className='content-title'> </h4><br/>
                  <p>
                    {profileInfo.street}<br/>
                    {profileInfo.city}<br/>
                    {profileInfo.postcode}<br/>
                  </p>
                  <br/>
                  <h4 className='content-title'> </h4><br/>
                  <p>
                    {profileInfo.training}<br/>
                    {profileInfo.training2}<br/>
                    {profileInfo.trainingAt}<br/>
                  </p>
              </div>
              {false &&
                  <img className='bio-pic' src={require('../../img/BioPix3.gif')} alt='HeadShot'/>
              }
              <div className='icon-container'>
              <h4 className='content-title'>Links:</h4><br/>
                <p className='icon-tag' onClick={_ => this.handleIconClick(this.props.urlFrontend)}>Github:</p><img className='clickable-icon' onClick={_ => this.handleClick('gitHub')} src={require('../../img/icons/github.png')}></img>
                <p className='icon-tag' onClick={_ => this.handleIconClick(this.props.urlFrontend)}>LinkedIn:</p><img className='clickable-icon' onClick={_ => this.handleClick('linkedIn')} src={require('../../img/icons/linkedin.png')}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
