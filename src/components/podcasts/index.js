import React, { Component } from 'react';
import {
  SearchBar,
} from "react-native-elements";
import {
  View,
  FlatList,
} from 'react-native'

import Podcast from './Podcast'

const Realm = require('realm');

const PodcastSchema = {
  name: 'Podcast',
  properties: { 
    title: 'string',
    artist: 'string',
    artwork: 'string',
  }
}

class Podcasts extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Podcasts",
      headerRight: (
        <SearchBar
          round
          lightTheme
          containerStyle={{backgroundColor: '#fff'}}
          onSubmitEditing={(event) => { navigation.navigate("Search", { term: event.nativeEvent.text }) }}
        />
      )
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      podcasts: null
    };

    Realm.open({
      schema: [PodcastSchema],
      schemaVersion: 2,
    }
    ).then(realm => {
      let podcasts = realm.objects('Podcast');
      this.setState({podcasts: podcasts})
    });
  }

  _renderPodcast(item) {
    return <Podcast item={ item } />
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.podcasts}
          numColumns={3}
          keyExtractor={(item) => `podcast-${item.trackId}`}
          renderItem={({item}) => this._renderPodcast(item)}
        />
      </View>
    );
  }
}

export default Podcasts;