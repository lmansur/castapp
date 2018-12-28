import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
  },
  description: {
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

class Description extends React.Component {
  render() {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Soft Skills Engineering is a weekly advice podcast for software developers. We answer questions about all the stuff you didnt realize you needed to know about being an engineer
        </Text>
      </View>
    )
  }
}

export default Description;
