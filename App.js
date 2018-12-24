import React, { Component } from "react";
import {
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";

import {
  List,
  ListItem
} from "react-native-elements";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation";

import Player from './src/components/player';
import Podcasts from './src/components/podcasts';

const Realm = require('realm');

const PodcastSchema = {
  name: 'Podcast',
  properties: { 
    title: 'string',
    artist: 'string',
    artwork: 'string',
  }
}

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: "Search" 
  };
  
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

const PodcastsStack = createStackNavigator(
  {
    Podcasts: Podcasts,
    Search: SearchScreen,
    Player: Player
  },
  {
    initialRouteName: "Podcasts",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Podcasts: PodcastsStack,
  },
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer
      />
    )
  }
}
