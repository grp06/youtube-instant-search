import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

export default class BigVideo extends Component {

	render(){
		const selectedVideo = this.props.selectedVideo
		if (selectedVideo.length === 0) {
			return <div className="empty"></div>
		}

		console.log('selectedVideo', selectedVideo)

		const id = selectedVideo.id.videoId;
		const url = 'https://www.youtube.com/embed/' + id

		return (
			<div className="big-video">
			<h2>{selectedVideo.snippet.title}</h2>
				<iframe width="560" height="315" src={url} frameBorder="0"></iframe>
			</div>
		)
	}

}

function mapStateToProps({ videos, selectedVideo }){
	return { videos, selectedVideo };
}

export default connect(mapStateToProps)(BigVideo)