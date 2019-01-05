import React from 'react';
import {
  View,
} from 'react-native';

import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';

import theme from '../../styles/theme';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontColor: '#333',
    paddingTop: 20,
  },
  audioElement: {
    height: 0,
    width: 0,
 },
 header: {
   backgroundColor: theme.backgroundColor,
   elevation: 0,
 },
 headerTitle: {
   flex: 1,
   fontWeight: 'bold',
   color: theme.fontColor,
   textAlign: 'center',
 },
};

export default class Player extends React.Component {
  static navigationOptions = {
    title: "Playing now",
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    // headerRight: (<Text>XXX<Text/>),
  };

  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }

  render() {
    const poadcast = this.props.navigation.getParam('poadcast');

    return (
      <View style={styles.container}>
        <AlbumArt url={poadcast.artwork} />
        <TrackDetails title="Stressed Out" artist="Twenty One Pilots" />
        <SeekBar trackLength={204} currentPosition={156} />
        <Controls />
      </View>
    );
  }

  setDuration(data) {
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {
    if (this.state.selectedTrack < this.props.tracks.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    }
  }
}
