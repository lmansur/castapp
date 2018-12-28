import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native'

import { withNavigation } from 'react-navigation';
import styles from './styles'

class Podcast extends Component {
  render() {
    const { navigation, item } = this.props;

    return (
      //<TouchableWithoutFeedback onPress={() => navigation.navigate('Player', {  poadcast: item })}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Podcast', { trackId: item.trackId })}>
        <View style={styles.item}>
          <Image
            source={{uri: item.artwork }}
            style={styles.itemImage}
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Podcast.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object,
};

export default withNavigation(Podcast);
