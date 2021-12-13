import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Input } from 'react-native-elements';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import Images from '../assets/Images';

const HearAboutUsScreen = (props) => {

  const [checked, setChecked] = useState(0);
  const [others, setOthers] = useState(false);
  const selections = ['Instagram', 'Influencer', 'Foundation', 'Friends', 'Family', 'Others'];
  
  return (
    <View>
      <BackgroundImage backgroundImage={Images.main_bg_second} />
      <SafeAreaView>
          <View>
            <View style={styles.titleView}>
              <Text style={styles.titleText}> 
                Where did you {'\n'} hear about us?
              </Text>
            </View>
            <View style={styles.radioGroup}>
              { selections.map((selection, index) => 
                <View style={styles.radioPattern} key={index}>
                  <RadioButton
                    value={index}
                    status={ checked === index ? 'checked' : 'unchecked' }
                    onPress={() => {
                      setChecked(index);
                      setOthers(index === 5 ? true : false);
                    }}
                  />
                  <Text style={styles.radioCaption}>{selection}</Text>
                </View>
              )}
              { others && 
                <Input
                  placeholder='type here...'
                  inputStyle={styles.inputStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  placeholderTextColor='#ffffff'
                />
              }
            </View>
            <View style={styles.buttonArea}>
              <RoundButton
                title="Next"
                style={styles.nextButton}
                onPress={() => {
                  props.navigation.navigate('Goal');
                }}
              />
            </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({

  titleView: {
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 90
  },

  titleText: {
    fontSize: 30,
    color:'white',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    marginLeft: 40
  },

  buttonArea: {
    alignSelf: 'center',
    position: 'absolute',
    top: 600,
    width: '90%',
  },

  radioGroup: {
    marginTop: 100,
    marginLeft: 100
  },

  radioPattern: {
    flexDirection: 'row'
  },

  radioCaption: {
    marginTop: 3,
    color: 'white',
    fontFamily: 'Open Sans',
    fontSize: 20
  },

  inputStyle: {
    color: '#ffffff',
  },

  inputContainerStyle: {
    marginLeft: 20,
    width: '60%',
    borderBottomColor: '#ffffff',
  }
});

export default HearAboutUsScreen;