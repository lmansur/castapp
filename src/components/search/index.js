import React from "react";
import PropTypes from 'prop-types';

import {
  List,
  ListItem
} from "react-native-elements";

import {
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPodcast } from '../../../actions';

// import Realm from 'realm';

// const PodcastSchema = {
//   name: 'Podcast',
//   properties: {
//     title: 'string',
//     artist: 'string',
//     artwork: 'string',
//   }
// }

class Search extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    addPodcast: PropTypes.func,
  }

  static navigationOptions = {
    title: "Search"
  }

  constructor(props) {
    super(props);
    const term = this.props.navigation.getParam('term');
    this.state = {
      isLoading: true,
      term: term,
      realm: null
    }
  }

  componentDidMount() {
    this.fetchPodcasts(this.state.term)
  }

  fetchPodcasts(term) {
    fetch(`https://itunes.apple.com/search?media=podcast&term=${term}&limit=20`)
      .then((response) => response.json())
      .then((responseJson) => {
        const data = responseJson.results
        this.setState({
          isLoading: false,
          data: data
        });
      })
  }

  subscribeToPodcast(item) {
    /*
    Realm.open({
      schema: [PodcastSchema],
      schemaVersion: 2,
    }).then(realm => {
      realm.write(() => {
        realm.create('Podcast', {
          title: item.collectionName,
          artist: item.artistName,
          artwork: item.artworkUrl600,
        });
      });
      this.setState({ realm });
    });
    */
    this.props.addPodcast(item);
    this.props.navigation.navigate('Podcasts');
  }

  renderPodcast(item) {
    return (
      <ListItem
        roundAvatar
        avatar={{uri: item.artworkUrl100}}
        title={item.collectionName}
        subtitle={item.artistName}
        rightIcon={{name: 'add' }}
        onPressRightIcon={this.subscribeToPodcast.bind(this, item)}
      />
    )
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <List>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => this.renderPodcast(item)}
          keyExtractor={(item) => `podcast-${item.trackId}`}
        />
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoading, data, term, realm } = state;
  return { isLoading, data, term, realm };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPodcast,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
