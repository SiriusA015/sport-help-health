import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Modal, Dimensions} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import Images from '../assets/Images';
import RoundButton from '../components/RoundButton';

const WelcomeScreen = (props) => {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setShowModal(true)
    }, 500);
  }, [])
    
  return (
    <View>
      <BackgroundImage backgroundImage={Images.welcome} />
      <Modal
        transparent
        visible={showModal}
        onRequestClose={() => {setShowModal(false)}}
      >
        <View style={styles.centeredView}>
            <View style={styles.warningModal}>
                <View style={styles.centerView}>
                    <Image 
                        source={Images.logo} 
                        style={styles.logo}
                    />
                </View>
                <View style={styles.centerView}>
                    <Text style={styles.welcome}>
                        We're so excited to get started with {'\n'}
                        &nbsp;&nbsp; you, but please check with your {'\n'}
                        &nbsp;&nbsp;doctor before engaging with any {'\n'}
                        &emsp;&emsp;&emsp;&emsp;types of exercise
                    </Text>
                </View>
                <View style={styles.dlgButton}>
                    <RoundButton
                        title="Okay"
                        onPress={() => {
                            setShowModal(false)
                        }}
                    />
                </View>
            </View>
        </View>
      </Modal>
      <View
        style={styles.buttonArea}
        >
        <RoundButton
            title="Get Started"
            color='brown'
            onPress={() => {
                props.navigation.navigate('Root', {stackname: 'Home'});
            }}
        />
      </View>
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
  },

  warningModal: {
    width: 400,
    height: 500,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },

  centerView: {
    marginTop: 30,
    alignItems: 'center'
  },

  logo: {
    width: 120,
    height: 120,
  },

  buttonArea: {
    position: 'absolute',
    width: '90%',
    left: 30,
    width: 100,
    top: Dimensions.get('window').height - 150
  },

  welcome: {
    color: '#B2B2B2',
    fontFamily: 'Regular',
    fontSize: 20,
    
  },

  dlgButton: {
    width: '40%',
    alignSelf: 'center',
    marginTop: 50
  }
});

export default WelcomeScreen;