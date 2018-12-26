import Realm from 'realm';

const PodcastSchema = {
  name: 'Podcast',
  properties: {
    trackId: 'int',
    title: 'string',
    artist: 'string',
    artwork: 'string',
  }
}

export function addPodcast(podcast) {
  return dispatch => {
    Realm.open({
      schema: [PodcastSchema],
      schemaVersion: 4,
    }).then(realm => {
      realm.write(() => {
        realm.create('Podcast', {
          trackId: podcast.trackId,
          title: podcast.collectionName,
          artist: podcast.artistName,
          artwork: podcast.artworkUrl600,
        });
      });
    }).then(() => {
      dispatch({
        type: 'ADD_PODCAST',
        payload: podcast
      });
    });
  }
}

export function loadPodcasts() {
  return dispatch => {
    let podcasts;

    Realm.open({
      schema: [PodcastSchema],
      schemaVersion: 4,
    }).then(realm => {
      podcasts = realm.objects('Podcast');
    }).then(() => {
      dispatch({
        type: "LOAD_PODCASTS",
        payload: podcasts,
      });
    });
  }
}
