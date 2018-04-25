import React, {PureComponent} from 'react'

import SkillBar from '../components/SkillBar'

import './SkillsCard.css';



class SkillsCard extends PureComponent {
  state = {
    counter: 0,
  }

  scrollUp = () => {
      if(this.state.counter > 0){
      this.smoothScroll('up')
      this.setState({
        counter: 0
      })
    }
  }

  scrollDown = () => {
      if(this.state.counter <5){
      this.smoothScroll('down')
      this.setState({
        counter: this.state.counter+1
      })
    }
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
    console.log(this.props.card);
    const skills = [
      'HTML5',
		  'CSS3',
			'ReactJS',
			'React Native',
			'Redux',
			'NodeJS', 
      'JavaScript',
			'jQuery',
			'Restfull APIs',
			'Express',
			'TypeScript',
			"TypeORM" ,
      'Sql',
			'PostgreSql',
			'Sequelize',
			'Docker',
			'Git',
			'Ruby',
    ]
    const {ul, scroll} = this.state
    const {card} = this.props
    console.log(`ul-${ul}`);
    return (
      <div>
        <div className={`card-${card}`}>
          <div className= 'card-header'>
              <p>
                Skills:  <br/>
              </p>
          </div>
          <div className='card-body' id='card-body'>
          {skills.map(skill => (
            <div className='skills-body-content'>
              <h3 style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}>-{skill}</h3>
              <SkillBar/>
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
          {this.state.counter !== 5 &&
          <button className='skills-body-button' onClick={_ => this.scrollDown()}>down</button>
          }
          {this.state.counter === 5 &&
          <button className='skills-body-button' onClick={_ => this.scrollUp()}>u[p]</button>
          }
        </div>
      </div>
    );
  }
}

export default SkillsCard;
