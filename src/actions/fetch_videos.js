const API_KEY = 'AIzaSyA-JI7oc1gvRs2jhAwBwtdMZ2BqkCoDgss';
//import YTSearch from 'youtube-api-search';
import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
const baseUrl = 'https://www.googleapis.com/youtube/v3/search'

export function FetchVideos (term){

	const params = {
		part: 'snippet',
		key: API_KEY,
		q: term,
		maxResults: 10,
		type: 'video',
		videoEmbeddable: 'true'
	}

	const request = axios.get(baseUrl, { params: params});

	return {
		type: FETCH_VIDEOS,
		payload: request
	};

}