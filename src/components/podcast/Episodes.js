import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Icon,
} from 'react-native-elements';

import theme from '../../styles/theme';

import EpisodesHeader from './EpisodesHeader'
import Title from './Title'

const styles = StyleSheet.create({
  episodesContainer: {
    flex: 3,
    flexDirection: "column",
  },
  episodes: {
    flex: 4,
  },
  episodeCard: {
    elevation: 1,
    flex: 1,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardContainer: {
    flex: 1,
    padding: 15,
  },
  cardSection: {
    flex: 3,
  },
  description: {
  },
  cardFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeInfo: {
  },
  footerButtons: {
    alignSelf: "flex-start",
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  downloadContainer: {
    paddingRight: 10,
  },
  playContainer: {
  },
});

const titleStyle = StyleSheet.create({
  podcastTitleContainer: {
    flex: 3,
    flexDirection: "row",
  },
  artwork: {
    height: 64,
    width: 64,
    borderRadius: 5,
  },
});

class Episodes extends React.Component {
  static propTypes = {
    podcast: PropTypes.object,
  };

  render() {
    return (
      <View style={styles.episodesContainer}>
        <EpisodesHeader/>
        <View style={styles.episodes}>
          <View style={styles.episodeCard}>
            <View style={styles.cardContainer}>
              <Title
                style={titleStyle}
                title={this.props.podcast.title}
                artworkUrl={this.props.podcast.artwork}
                artist={this.props.podcast.artist}
              />
              <View style={styles.cardSection}>
                <Text
                  style={styles.description}
                  numberOfLines={3}
                >
                  { this.props.podcast.description }
                </Text>
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.timeInfo}>
                  23 DEC 2018 - 27 Min
                </Text>
                <View style={styles.footerButtons}>
                  <View style={styles.downloadContainer}>
                    <Icon
                      name='file-download'
                    />
                  </View>
                  <View style={styles.playContainer}>
                    <Icon
                      name='play-circle-filled'
                      color={theme.primaryColor}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Episodes;