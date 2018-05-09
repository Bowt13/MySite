import React, {PureComponent} from 'react'

import './Joystick.css';



class Joystick extends PureComponent {

  render() {
    return (
      <div className='joystick'>
        <div className={`joystick-ball ball-${this.props.position}`}></div>
        <div className={`joystick-stick stick-${this.props.position}`}></div>
        <div className={`joystick-connect connect-${this.props.position}`}></div>
      </div>
    );
  }
}

export default Joystick;
