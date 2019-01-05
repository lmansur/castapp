import { combineReducers } from 'redux';

const INITIAL_STATE = {};

const podcastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PODCAST': {
      const podcast = action.payload;
      return {
        ...state,
        [podcast.trackId]: {
          trackId: podcast.trackId,
          title: podcast.collectionName,
          artist: podcast.artistName,
          artwork: podcast.artworkUrl600,
          feedUrl: podcast.feedUrl,
          description: podcast.description,
        }};
    }
    case 'LOAD_PODCASTS': {
      const podcasts = action.payload || [];
      let newState = { ...state };

      podcasts.forEach(function(podcast) {
        newState[podcast.trackId] = podcast;
      });

      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({
  podcasts: podcastReducer,
});
