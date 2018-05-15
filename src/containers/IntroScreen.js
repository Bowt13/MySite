import React, { Component } from 'react';
import './IntroScreen.css'


class IntroScreen extends Component {
  state={

  }
  render() {
    return (
      <div className={`intro-screen-${this.props.visabilaty}`}>
        <h1 className='intro-text'>Insert Your Coin Please Try Again.</h1>
        <section class="section_8bit">
          <div class="wrapper">
           <h1 className='intro-title'>Nigel's Site</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default IntroScreen;
