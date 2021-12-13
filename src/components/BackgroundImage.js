import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions } from 'react-native';

class BackgroundImage extends Component {
  render() {
    return (
      <Image
        style={styles.backgroundImage}
        source={this.props.backgroundImage}
      />
    );
  }
}

export default BackgroundImage;

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch'
  },
});
