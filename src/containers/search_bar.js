import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { FetchVideos } from '../actions/fetch_videos';
import { bindActionCreators } from 'redux';

export default class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = { 
			term: '',
			videos: [] 
		};

		this.onInputChange = this.onInputChange.bind(this);
		//this.onFormSubmit = this.onFormSubmit.bind(this);

	}

	onInputChange(event){
		console.log(event.target.value)
		this.setState({ term: event.target.value })
		this.props.GoFetchVideos(this.state.term);

	}




	render(){

		return (
			<form>
				<input
					className="main-search" 
					type="text" 
					placeholder="enter a search term"
					value={this.state.term} 
					onChange={this.onInputChange}
					/>

				
			</form>
			
		)
	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ GoFetchVideos: FetchVideos }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
