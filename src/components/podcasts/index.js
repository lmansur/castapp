import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  FlatList,
} from 'react-native'

import {
  SearchBar,
} from "react-native-elements";

import { connect } from 'react-redux';

import Podcast from './Podcast'

// import Realm from 'realm';

// const PodcastSchema = {
//   name: 'Podcast',
//   properties: {
//     title: 'string',
//     artist: 'string',
//     artwork: 'string',
//   }
// }

class Podcasts extends React.Component {
  static propTypes = {
    podcasts: PropTypes.array,
  };

  static navigationOptions = ({ navigation }) => {
    const onSubmitEditing = (event) => {
      navigation.navigate("Search", { term: event.nativeEvent.text });
    };

    return {
      headerTitle: "Podcasts",
      headerRight: (
        <SearchBar
          round
          lightTheme
          text="locked"
          containerStyle={{backgroundColor: '#fff'}}
          onSubmitEditing={onSubmitEditing}
        />
      )
    }
  };

  // constructor(props) {
  //   [>
  //   this.state = {
  //     podcasts: null
  //   };

  //   Realm.open({
  //     schema: [PodcastSchema],
  //     schemaVersion: 2,
  //   }
  //   ).then(realm => {
  //     let podcasts = realm.objects('Podcast');
  //     this.setState({podcasts: podcasts})
  //   });
  //   */
  // }
  getTrackId = (podcast) => {
    return `podcast-${podcast.trackId}`;
  }

  renderPodcast = ({item}) => <Podcast item={item} />

  render() {
    return (
      <View>
        <FlatList
          data={this.props.podcasts}
          numColumns={3}
          keyExtractor={this.getTrackId}
          renderItem={this.renderPodcast}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    podcasts: Object.values(state.podcasts)
  }
};

export default connect(mapStateToProps)(Podcasts);
