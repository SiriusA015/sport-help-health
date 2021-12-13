import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

class LoadingOverlay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Progress.CircleSnail size={100} indeterminate={true} thickness={5} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffcc',
  },
});

export default LoadingOverlay;
