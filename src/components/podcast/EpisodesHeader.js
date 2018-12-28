import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Button,
} from 'react-native-elements';

import theme from '../../styles/theme';

const styles = StyleSheet.create({
  episodesHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  allEpisodesContainer: {
    flex: 1,
    justifyContent: "center",
  },
  allEpisodes: {
    fontSize: 19,
  },
  subscribeButtonContainer: {
    justifyContent: "center",
    flex: 1,
  },
});

class EpisodesHeader extends React.Component {
  render() {
    return (
      <View style={styles.episodesHeader}>
        <View style={styles.allEpisodesContainer}>
          <Text style={styles.allEpisodes}>
            All episodes
          </Text> 
        </View>
        <View style={styles.subscribeButtonContainer}>
          <Button
            outline
            rounded
            color={theme.primaryColor}
            title="Following"
            onPress={"placeholder"}
          />
        </View>
      </View>
    )
  }
}

export default EpisodesHeader;
