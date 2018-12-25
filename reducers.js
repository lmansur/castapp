import { combineReducers } from 'redux';

const INITIAL_STATE = {};

const podcastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PODCAST': {
      const podcast = action.payload;
      return { ...state, [podcast.trackId]: podcast };
    }
    default:
      return state;
  }
};

export default combineReducers({
  podcasts: podcastReducer,
});
