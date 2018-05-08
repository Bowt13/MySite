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

  render() {
    const profileInfo = {
      name: 'Nigel Brown',
      birthDate: '13-03-1990',
      training: 'Full-Stack',
      training2: 'web developer',
      trainingAt: 'Codaisseur Academy'
    }
    const {ul} = this.state
    const {card} = this.props
    console.log(`ul-${ul}`);
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
                <p>
                  Name:<br/>
                  Birthdate:<br/>
                  <br/>
                  Training:<br/>
                  <br/>
                  At:<br/>
                </p>
              </div>
              <div className='content-right'>
                <p>
                  {profileInfo.name}<br/>
                  {profileInfo.birthDate}<br/>
                  <br/>
                  {profileInfo.training}<br/>
                  {profileInfo.training2}<br/>
                  {profileInfo.trainingAt}<br/>
                </p>
              </div>
              <img className='bio-pic' src={require('../../img/BioPix3.gif')} alt='HeadShot'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
