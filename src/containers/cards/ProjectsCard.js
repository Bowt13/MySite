import React, {PureComponent} from 'react'

import SkillBar from '../../components/SkillBar'

import './Card.css'
import './SkillsCard.css';



class SkillsCard extends PureComponent {
  state = {
    counter: 0,
    dissed: false,
  }

  scrollUp = () => {
      if(this.state.counter > 0){
      this.smoothScroll('up')
      this.setState({
        counter: this.state.counter-1,
        dissed: true,
      })
    }
  }

  scrollDown = () => {
      if(this.state.counter <5){
      this.smoothScroll('down')
      this.setState({
        counter: this.state.counter+1,
        dissed: true,
      })
    }
    setTimeout(_ => {this.setState({dissed: false})}, 650)
  }

  smoothScroll = (type) => {
    let height = document.getElementById('check').clientHeight
    let i = 0
    switch (type) {
      case 'up':
        setInterval(function(){if(i !== 127){document.getElementById('card-body').scrollBy(0, -(height/100)); i=i+1}}, 1);
        setTimeout(_ => {this.setState({dissed: false})}, 460)
        break;
      case 'down':
        setInterval(function(){if(i !== 127){document.getElementById('card-body').scrollBy(0, (height/50)); i=i+1}}, 1);
        setTimeout(_ => {this.setState({dissed: false})}, 650)
        break;
      default:
        break;
    }
  }

  render() {
    console.log(this.props.card);
    const projects = [
      {name: 'HTML5', percentage: 85},
		  {name: 'CSS3', percentage: 105},
			{name: 'ReactJS', percentage: 80},
			{name: 'React Native', percentage: 40},
      {name: 'Redux', percentage: 80},
      {name: 'NodeJs', percentage: 70},
      {name: 'JavaScript', percentage: 85},
      {name: 'jQuery', percentage: 55},
      {name: 'Restfull APIs', percentage: 70},
      {name: 'Express', percentage: 70},
			{name: 'TypeScript', percentage: 75},
      {name: 'TypeORM', percentage: 75},
      {name: 'Sql', percentage: 65},
      {name: 'PostgreSql', percentage: 70},
      {name: 'Sequelize', percentage: 65},
      {name: 'Docker', percentage: 55},
      {name: 'Git', percentage: 65},
      {name: 'Ruby', percentage: 75},
    ]
    const {ul} = this.state
    const {card} = this.props
    console.log(`ul-${ul}`);
    return (
      <div className='card'>
        <div className={`card-${card}`}>
          <div className= 'card-header'>
              <p className= 'card-title'>
                Skills:<br/>
              </p>
          </div>
          <div className='card-body' id='card-body'>
          {projects.map(skill => (
            <div className='skills-body-content'>
              <SkillBar percentage={skill.percentage} name={skill.name}/>
            </div>
          ))}
          <div className='skills-body-content' id='check'>
            <h3 style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}>-yeah</h3>
            <SkillBar/>
          </div>
          </div>
          <button
          id='buttonDown'
          className='skills-body-button'
          onClick={_ => this.scrollDown()}
          disabled={this.state.dissed}
          >down</button>
          <button
          id='buttonUp'
          className='skills-body-button'
          onClick={_ => this.scrollUp()}
          disabled={this.state.dissed}>up</button>
        </div>
      </div>
    );
  }
}

export default SkillsCard;
