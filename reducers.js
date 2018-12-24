import { combineReducers } from 'redux';

const INITIAL_STATE = {
  podcasts: []
}

const podcastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PODCAST': {
      const { podcasts } = state; 
      podcasts.push(action.payload);

      const newState = { podcasts }
      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({
  podcasts: podcastReducer,
});
