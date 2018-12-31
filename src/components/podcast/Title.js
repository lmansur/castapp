import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const defaultStyles = StyleSheet.create({
  podcastTitleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  artworkContainer: {
    alignSelf: "center",
  },
  artwork: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  titlesContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
  },
});

class Title extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    artworkUrl: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
  };

  render() {
    const newStyleSheet = StyleSheet.create(this.props.style);
    const styles = { ...defaultStyles, ...newStyleSheet };

    return (
      <View style={styles.podcastTitleContainer}>
        <View style={styles.artworkContainer}>
          <Image
            source={{uri: this.props.artworkUrl}}
            style={styles.artwork}
          />
        </View>
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>
            { this.props.title }
          </Text>
          <Text style={styles.subtitle}>
            { this.props.artist }
          </Text>
        </View>
      </View>
    )
  }
}

export default Title;
