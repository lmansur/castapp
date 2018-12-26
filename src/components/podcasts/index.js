import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  FlatList,
} from 'react-native'

import {
  SearchBar,
} from "react-native-elements";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Podcast from './Podcast'

import { loadPodcasts } from '../../../actions';

class Podcasts extends React.Component {
  static propTypes = {
    podcasts: PropTypes.array,
    loadPodcasts: PropTypes.func,
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
          containerStyle={{backgroundColor: '#fff'}}
          onSubmitEditing={onSubmitEditing}
        />
      )
    }
  };

  constructor(props) {
    super(props);

    this.props.loadPodcasts();
  }

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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadPodcasts,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
