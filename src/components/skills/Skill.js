import React, {PureComponent} from 'react'

import './Skill.css';

class Skill extends PureComponent {

  render() {
    return (
      <div className='skill'>
        <h3 className='skill-title'>-{this.props.name}</h3>
        <div className='skillbar-wrapper'>
          <div className={`skillbar-filler at-percentage-${this.props.percentage}`}></div>
        </div>
      </div>
    );
  }
}

export default Skill;
