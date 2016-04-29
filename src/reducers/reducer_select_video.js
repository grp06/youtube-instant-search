import { SELECT_VIDEO } from '../actions/select_video';
import { FETCH_VIDEOS } from '../actions/fetch_videos';

export default function(state = [], action){
	switch (action.type){
		case SELECT_VIDEO:
			console.log('Action: video select', action.payload);
			return action.payload;
		case FETCH_VIDEOS:
			console.log('Action: fetch videos', action.payload);
			return action.payload.data.items[0];
		default:
			return state
	}
	return state;
}