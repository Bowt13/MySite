import React, {PureComponent} from 'react'

import './ArcadeButton.css'

class ArcadeButton extends PureComponent {

  render() {
    return (
      <div className= 'arcadebutton'>
        <div className= 'button-bottom'>
          <div className= {`button-top-middle-${this.props.pressed}`}>
            <div className= {`button-top-${this.props.pressed}`}>
              <div className = {`button-center-${this.props.pressed}`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArcadeButton;
