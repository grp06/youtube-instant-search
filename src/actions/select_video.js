export const SELECT_VIDEO = 'SELECT_VIDEO';

export function SelectVideo (Video){

	console.log('action creator: vid', Video);
	return {
		type: SELECT_VIDEO,
		payload: Video
	};

}