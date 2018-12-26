import React from "react";
import PropTypes from 'prop-types';

import {
  List,
} from "react-native-elements";

import {
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";

import { connect } from 'react-redux';
import Item from './Item';

class Search extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
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
          renderItem={({item}) => <Item item={item}/>}
          keyExtractor={(item) => `podcast-${item.trackId}`}
        />
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoading, data, term } = state;
  return { isLoading, data, term };
};

export default connect(mapStateToProps)(Search);
