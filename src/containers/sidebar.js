import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { SelectVideo } from '../actions/select_video';
import { bindActionCreators } from 'redux';

export default class Sidebar extends Component {
	
	constructor(props){
		super(props);

		this.passVideo = this.passVideo.bind(this);

	}

	onInputChange(event){
		console.log(event.target.value);
	}



	passVideo(video){
		console.log('current vidddd', video);
		console.log('this.props ', this)
		this.props.GoSelectVideo(video)
	}

	renderList(){
		const videos = this.props.videos
		return(
			videos.map(video => 
				<li 
					key={video.id.videoId}
					onClick={this.passVideo.bind(null, video)}
					>
				<h5>{video.snippet.title}</h5>
				<img src={video.snippet.thumbnails.medium.url} />
				</li>
			)
		)
	}

	render(){
		return (
			<ul>
				{this.renderList()}
			</ul>
		)
	}
}



function mapStateToProps({ videos }){
	return { videos };
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({ GoSelectVideo: SelectVideo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

