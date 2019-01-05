import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';

import Title from './Title';
import Description from './Description';
import Episodes from './Episodes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
  },
});

class Podcast extends React.Component {
  static propTypes = {
    podcast: PropTypes.object,
  };

  render() {
    return (
      <View style={styles.container}>
        <Title
          title={this.props.podcast.title}
          artworkUrl={this.props.podcast.artwork}
          artist={this.props.podcast.artist}
        />
        <Description
          description={this.props.podcast.description}
        />
        <Episodes
          podcast={this.props.podcast}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  let id = props.navigation.getParam('trackId');
  let podcast = state.podcasts[id];
  return { podcast };
};

export default connect(mapStateToProps)(Podcast);
