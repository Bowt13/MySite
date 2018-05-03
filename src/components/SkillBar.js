import React, {PureComponent} from 'react'

import './SkillBar.css';



class SkillBar extends PureComponent {

  render() {
    return (
      <div className='skillbar'>
        <h3 className='skillbar-title'>-{this.props.name}</h3>
        <div className='skillbar-wrapper'>
          <div className={`skillbar-filler at-percentage-${this.props.percentage}`}></div>
        </div>
      </div>
    );
  }
}

export default SkillBar;
