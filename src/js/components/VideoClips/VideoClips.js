import React, { Component } from 'react';

import './VideoClips.scss';

class VideoClips extends Component {
	
	constructor(props) {
    super(props);
    this.videoClips = React.createRef();
    this.nextVideoClips = React.createRef();
  }

  state = {
  	loading: false,//true,
  	currentClip : 0,
  	nextClip : 1,
  	videos : this.props.videos
  }

  componentDidMount () {
		// this.videoClips.current.addEventListener('ended', this.videoEnded);
    //
    this.videoClips.current.addEventListener('timeupdate', this.videoPlay);
		this.videoClips.current.addEventListener('onloadeddata', this.setState({ loading : false }));
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
  	this.nextVideoClips.current.load();
    this.videoClips.current.play();
    this.nextVideoClips.current.play();
  }

  videoPlay = (event) => {
    // console.log('currentTime: ' + event.target.currentTime)
    // console.log('duration: ' + event.target.duration)
    if (event.target.currentTime > event.target.duration - .5) {
      console.log('switch the video');
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
      this.nextVideoClips.current.load();
    }
    if (event.target.currentTime > event.target.duration) {
      this.videoClips.current.play();
      // this.nextVideoClips.current.play();
    }
  }

	render() {

		let currentClip = "http:" + this.state.videos[this.state.currentClip].fields.file.url;
		let nextClip = "http:" + this.state.videos[this.state.nextClip].fields.file.url;

		return (
      <section className="my-margin">
  			<div className={!this.state.loading ? "video-clips" : "video-clips loading"}>
          <div className="container">
            <div className="set-height">
    					<div className="object-contain">
    						<video className="current-clip" ref={this.videoClips} autoPlay muted playsInline>
    							<source src={currentClip} type="video/mp4"/>
    						</video>
                <video className="next-clip" ref={this.nextVideoClips} autoPlay muted playsInline>
                  <source src={nextClip} type="video/mp4"/>
                </video>
    					</div>
    				</div>
          </div>
  			</div>
      </section>
		);
	}
}

export default VideoClips;