import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const AlbumArt = ({
  url,
  onPress
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: url}}
      />
    </TouchableOpacity>
  </View>
);

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imageSize = width - 192;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 96,
    paddingRight: 96,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
})
