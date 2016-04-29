import { combineReducers } from 'redux';
import ReturnVideos from './reducer_return_videos'
import SelectVideo from './reducer_select_video'


const rootReducer = combineReducers({
  videos: ReturnVideos,
  selectedVideo: SelectVideo
});

export default rootReducer;
