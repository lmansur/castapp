import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import theme from '../../styles/theme';

const TrackDetails = ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
}) => (
<View style={styles.container}>
  <View style={styles.detailsWrapper}>
    <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
    <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
  </View>
</View>
);

export default TrackDetails;

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
    color: theme.fontColor,
    textAlign: 'center',
  },
  artist: {
    color: theme.fontColorLight,
    fontSize: 12,
    marginTop: 4,
  },
});
