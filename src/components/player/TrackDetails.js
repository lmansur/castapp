import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TrackDetails extends React.Component {
  render() {
    const  { title, artist, onAddPress, onMorePress, onTitlePress, onArtistPress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
          <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
});
