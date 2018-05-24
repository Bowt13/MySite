import React, {PureComponent} from 'react'

import Skill from '../../components/skills/Skill'

import './Card.css'
import './SkillsCard.css';



class SkillsCard extends PureComponent {
  state = {
    counter: 0,
    dissed: false,
  }

  MouseHold = (func) => {
    var mouseStatus = 'up';
    var mouseTimeout;
    let images = document.getElementsByTagName("img")
    images = Array.prototype.slice.call(images)

    console.log(images)
    console.log(Array.isArray(images))

    if(Array.isArray(images)){
      const chevrons = images.filter(img => img.name === 'up' || img.name === 'down')
      chevrons.forEach(img => {
        img.addEventListener("mousedown",function() {
          func(img.name)
        }, false);
        img.addEventListener("mouseup",function() {
          func('cancel')
        }, false);
      })
    }
  }
  componentDidMount(){
    this.MouseHold(this.props.chevClick)
  }

  render() {
    const skills = [
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
    const {card, chevClick} = this.props
    return (
      <div className='card'>
        <div className={`card-${card}`}>
          <div className= 'card-header'>
              <p className= 'card-title'>
                Skills:<br/>
              </p>
          </div>
          <img name='up' className={`chevron-top-${this.props.chevronTop}`} src={require(`../../img/chevron-${this.props.chevronTop}.gif`)} alt="chevron"/>
          <div className='card-body' id='skill-card-body' tabindex='10'>
            {skills.map(skill => (
              <div className='skills-body-content'>
                <Skill name={skill.name} percentage={skill.percentage}/>
              </div>
            ))}
          </div>
          <img name='down' className={`chevron-bottom-${this.props.chevronBottom}`} src={require(`../../img/chevron-${this.props.chevronBottom}.gif`)} alt="chevron"/>
        </div>
      </div>
    );
  }
}

export default SkillsCard;
