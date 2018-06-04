import React, { Component } from 'react'
import './IntroScreen.css'

class IntroScreen extends Component {
	state = {}

	render() {
		return (
			<div className={`intro-screen-${this.props.visabilaty}`}>
				<h1 className="intro-text">Insert Your Coin Please Press Return.</h1>
				<section class="section_8bit">
					<div class="wrapper">
						<h1 className="intro-title">My Site</h1>
					</div>
				</section>
				{this.props.visable === 'visable' && (
					<iframe
						width="0%"
						height="166"
						scrolling="no"
						frameborder="no"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311362492%3Fsecret_token%3Ds-WDFGG&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
					/>
				)}
			</div>
		)
	}
}

export default IntroScreen
