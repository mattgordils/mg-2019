import React, { Component } from 'react';

import './VideoClips.scss';

class VideoClips extends Component {
	
	constructor(props) {
    super(props);
    this.videoClips = React.createRef();
    this.videoClip = React.createRef();
    // this.nextVideoClips = React.createRef();
  }

  state = {
  	loading: true,
  	currentClip : 0,
  	nextClip : 1,
  	videos : this.props.videos
  }

  componentDidMount () {
		this.videoClips.current.addEventListener('ended', this.videoEnded);
		this.videoClips.current.addEventListener('onloadeddata', this.setState({loading : false}));
  }

  videoEnded = (event) => {
  	console.log(this.state.videos.length - 1)

  	if(!event) {
			event = window.event; 
    }
		if (this.state.currentClip === this.state.videos.length - 1) {
  		this.setState({currentClip : 0})
  		this.setState({nextClip : 1})
  	} else if (this.state.nextClip === this.state.videos.length - 1) {
			this.setState({currentClip : this.state.currentClip + 1})
  		this.setState({nextClip : 0})	
  	} else {
  		this.setState({currentClip : this.state.currentClip + 1})
  		this.setState({nextClip : this.state.nextClip + 1})
  	}
  	this.videoClips.current.load();
  	// this.nextVideoClips.current.load();
    this.videoClips.current.play();
    // this.nextVideoClips.current.play();
  }

	render() {

		console.log(this.state)

		let currentClip = 'https:' + this.state.videos[this.state.currentClip].fields.file.url;
		let nextClip = 'https:' + this.state.videos[this.state.nextClip].fields.file.url;

		return (
			<div className={!this.state.loading ? "video-clips" : "video-clips loading"}>
				<div className="set-height">
					<div className="object-contain">
						<video className="current-clip" ref={this.videoClips} autoPlay muted playsInline>
							<source ref={this.videoClip} src={currentClip} type="video/mp4"/>
						</video>
						{/*<video className="next-clip" ref={this.nextVideoClips} muted>
							<source src={nextClip} type="video/mp4"/>
						</video>*/}
					</div>
				</div>
			</div>
		);
	}
}

export default VideoClips;