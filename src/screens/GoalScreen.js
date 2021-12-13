import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import Images from '../assets/Images';

const GoalScreen = (props) => {

  const onSelectGoal = (id) => {
    props.navigation.navigate('Welcome');
  }
  
  return (
    <View>
      <BackgroundImage backgroundImage={Images.main_bg_second} />
      <SafeAreaView>
          <View style={styles.contentView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}> 
                What goal do you {'\n'} have in mind?
              </Text>
            </View>
            <View style={styles.contentView}>
              <TouchableOpacity onPress={() => {onSelectGoal(0)}}>
                <Image
                  style={styles.goal}
                  source={Images.goal1}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {onSelectGoal(1)}}>
                <Image
                  style={styles.goal}
                  source={Images.goal2}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {onSelectGoal(2)}}>
                <Image
                  style={styles.goal}
                  source={Images.goal3}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentView: {
    alignItems: 'center',
    marginTop: 70
  },

  titleView: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10
  },

  titleText: {
    fontSize: 30,
    color:'white',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    marginLeft: 80,
  },

  goal: {
    width: 450,
    height: 170,
    margin: 10
  }
});

export default GoalScreen;