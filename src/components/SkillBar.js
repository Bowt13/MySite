import React, {PureComponent} from 'react'

import './SkillBar.css';



class SkillBar extends PureComponent {

  render() {
    return (
      <div className='skillbar_wrapper'>
        <div className='skillbar_filler'></div>
      </div>
    );
  }
}

export default SkillBar;
