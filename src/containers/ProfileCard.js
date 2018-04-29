import React, {PureComponent} from 'react'

import SkillBar from '../components/SkillBar'

import './SkillsCard.css';



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

    }
    const {ul, scroll} = this.state
    const {card} = this.props
    console.log(`ul-${ul}`);
    return (
      <div>
        <div className={`card-${card}`}>
          <div className= 'card-header'>
              <p>
                Profile:  <br/>
              </p>
          </div>
          <div className='card-body' id='card-body'>
            <div className='skills-body-content' id='check'>
              <p style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}>
                Name: {profileInfo.name}<br/>
                Birthdate: {profileInfo.birthDate}<br/>

              </p>
              <img src=''/>
            </div>
          </div>
          {this.state.counter !== 5 &&
          <button
          className='skills-body-button'
          onClick={_ => this.scrollDown()}
          disabled={this.state.disabled} >down</button>
          }
          {this.state.counter === 5 &&
          <button
          className='skills-body-button'
          onClick={_ => this.scrollUp()}
          disabled={this.state.disabled} >up</button>
          }
        </div>
      </div>
    );
  }
}

export default ProfileCard;
