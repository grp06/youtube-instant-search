import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import BigVideo from '../containers/big_video';
import Sidebar from '../containers/sidebar';

export default class App extends Component {
	render(){
		return(
			<div className="outside">
				<div className="title">React Youtube Instant Search</div>
				<SearchBar />
				
				<div className="main-box">
					<BigVideo />
					<Sidebar />
				</div>

		
			</div>
		);

	}
}