import { FETCH_VIDEOS } from '../actions/fetch_videos'

export default function(state = [], action){
	switch (action.type){
		case FETCH_VIDEOS:

			// return state.concat([ action.payload.data ]);
			return action.payload.data.items;
		default:
			return state
	}
	return state;
}