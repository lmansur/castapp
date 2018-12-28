import React, { Component } from "react";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation";

import Player from './src/components/player';
import Podcasts from './src/components/podcasts';
import Podcast from './src/components/podcast';
import Search from './src/components/search';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const PodcastsStack = createStackNavigator(
  {
    Podcasts: Podcasts,
    Podcast: Podcast,
    Search: Search,
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
      <Provider store={ store }>
        <AppContainer
        />
      </Provider>
    )
  }
}
