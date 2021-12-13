import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Dropdown } from 'react-native-element-dropdown';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import Images from '../assets/Images';
import {foundations} from '../../redux/constants/configConstants';

const FirstScreen = (props) => {

  const [foundation, setFoundation] = useState(foundations[0].value);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [])
  
  return (
    <View style={styles.container}>
      <BackgroundImage backgroundImage={Images.main_bg_second} />
      <SafeAreaView style={styles.container}>
          <View style={styles.contentView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}> 
                Choose your {'\n'} Foundation
              </Text>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.descriptionText}> 
                &nbsp; Support your favorite Non-Profit today. A {'\n'}
                percentage of all of your in-app purchases {'\n'}
                &nbsp; will go to the foundation of your choice. 
              </Text>
            </View>
            <View>
              <Dropdown
                dropdownPosition='bottom'
                style={styles.dropdown}
                containerStyle={styles.dropdownContainerStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={foundations}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={foundation}
                onChange={item => {
                  setFoundation(item.value);
                }}
              />
            </View>
            <View style={styles.buttonArea}>
              <RoundButton
                title="Next"
                style={styles.nextButton}
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
              />
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
    flex: 1,
    alignItems: 'center',
  },

  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    top: -15
  },

  titleText: {
    fontSize: 30,
    color:'white',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    marginLeft: 70
  },

  descriptionText: {
    marginTop: -250,
    fontSize: 20,
    color:'white',
    fontFamily: 'Regular',
    marginHorizontal: 30
  },

  buttonArea: {
    flex: 1,
    justifyContent: "center",
    width: '90%',
    bottom: 60
  },

  dropdown: {
    marginTop: -200,
    height: 50,
    borderRadius: 20,
    width: 300,
    backgroundColor: '#ffffff',
  },

  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 20
  },
  
  dropdownContainerStyle: {
    borderRadius: 20,
  }
});

export default FirstScreen;