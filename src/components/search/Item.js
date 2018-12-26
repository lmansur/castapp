import React from 'react';

import {
  ListItem,
} from "react-native-elements";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPodcast } from '../../../actions';

import PropTypes from 'prop-types';

class Item extends React.Component {
  static propTypes = {
    addPodcast: PropTypes.func,
    item: PropTypes.object,
    podcasts: PropTypes.object,
  }

  constructor(props) {
    super(props);
    var item = this.props.item;
    var icon;

    if(this.props.podcasts.hasOwnProperty(item.trackId)) {
      icon = { name: 'check' }
    } else {
      icon = { name: 'add' }
    }

    this.state = {
      icon: icon
    };
  }

  subscribeToPodcast(item) {
    /*
    Realm.open({
      schema: [PodcastSchema],
      schemaVersion: 2,
    }).then(realm => {
      realm.write(() => {
        realm.create('Podcast', {
          title: item.collectionName,
          artist: item.artistName,
          artwork: item.artworkUrl600,
        });
      });
      this.setState({ realm });
    });
    */
    this.props.addPodcast(item);
    this.setState({
      icon: { name: 'check' },
    });
  }

  render() {
    return (
      <ListItem
        roundAvatar
        avatar={{uri: this.props.item.artworkUrl100}}
        title={this.props.item.collectionName}
        subtitle={this.props.item.artistName}
        rightIcon={this.state.icon}
        onPressRightIcon={this.subscribeToPodcast.bind(this, this.props.item)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { podcasts } = state;
  return { podcasts };
};


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addPodcast,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Item);
