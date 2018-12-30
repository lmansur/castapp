import Realm from 'realm';

import parser from 'fast-xml-parser';

const PodcastSchema = {
  name: 'Podcast',
  properties: {
    trackId: 'int',
    title: 'string',
    description: 'string',
    artist: 'string',
    artwork: 'string',
    feedUrl: 'string',
  }
}

export function addPodcast(podcast) {
  return dispatch => {
    let url = podcast.feedUrl;
    fetch(url, { headers: { "Content-Type": "applicaton/xml", "Accept": "applicaton/xml" } }).
      then(response => {
        return response.text();
      })
      .then(result => {
        return parser.parse(result);
      })
      .then(json => {
        let description = json.rss.channel.description;

        Realm.open({
          schema: [PodcastSchema],
          schemaVersion: 6,
        }).then(realm => {
          realm.write(() => {
            realm.create('Podcast', {
              trackId: podcast.trackId,
              title: podcast.collectionName,
              artist: podcast.artistName,
              artwork: podcast.artworkUrl600,
              feedUrl: podcast.feedUrl,
              description: description,
            });
          });
        })
      })
      .then(() => {
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
      schemaVersion: 6,
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
