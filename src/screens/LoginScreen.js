import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import LoadingOverlay from '../components/LoadingOverlay';
import Images from '../assets/Images'

const LoginScreen = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const onLogin = () => {
    // if (email === '' || password === '') {
    //   return;
    // }
    props.navigation.navigate('HearAboutUs');
  }
  return (
    <View>
      <BackgroundImage backgroundImage={Images.main_bg_login} />
      <SafeAreaView>
        {loading && <LoadingOverlay />}
        <View>
          <View style={styles.form}>
            <Text style={styles.titleStyle}>Email Address</Text>
            <Input
              containerStyle={styles.inputContainerStyle}
              placeholder='your email address'
              leftIcon={
                <Feather
                  name='user'
                  size={24}
                  color='#707070'
                />
              }
              leftIconContainerStyle={styles.leftIconContainerStyle}
            />
            <Text style={styles.titleStyle}>Password</Text>
            <Input
              keyboardType='password'
              containerStyle={styles.inputContainerStyle}
              placeholder='your password'
              placeholderTextColor={'#A1A1A1'}
              leftIcon={
                <MaterialCommunityIcons
                  name='lock-outline'
                  size={24}
                  color='#707070'
                />
              }
              leftIconContainerStyle={styles.leftIconContainerStyle}
            />
            <TouchableOpacity 
              onPress={() => {}}
              style={styles.forgetPwd}
            >
              <Text style={styles.forgetTxt}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonArea}>
            <RoundButton
              title="Login"
              onPress={() => {
                onLogin();
              }}
            />
          </View>
          <View>
              <Text style={styles.socialArea}>or login with</Text>
          </View>
          <View style={styles.socialIcons}>
            <TouchableOpacity 
                style={styles.socialIcons}
                onPress={() => {}}
            >
              <Image
                style={styles.socialImage}
                source={Images.facebookIcon}
                resizeMode='stretch'
              />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.socialIcons}
                onPress={() => {}}
            >
              <Image
                style={styles.socialImage}
                source={Images.googleIcon}
                resizeMode='stretch'
              />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.socialIcons}
                onPress={() => {}}
            >
              <Image
                style={styles.socialImage}
                source={Images.appleIcon}
                resizeMode='stretch'
              />
            </TouchableOpacity>
          </View>
          <View style={styles.signupParas}>
            <Text style={styles.signupTxt}>
              Don't Have An Account? &nbsp;
            </Text>
            <TouchableOpacity>
              <Text style={styles.bold}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    color: '#A5593C',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    fontSize: 18,
    marginLeft: 40
  },
  form: {
    marginTop: 300
  },
  buttonArea: {
    alignSelf: 'center',
    width: '90%',
  },
  inputContainerStyle: {
    width: '90%',
    marginLeft: 20,
    marginBottom: 20
  },
  forgetPwd: {
    alignSelf: 'flex-end',
    marginRight: 35,
  },
  forgetTxt: {
    color: '#9CA3B7'
  },
  leftIconContainerStyle: {
    left: -10
  },
  socialArea: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#6E6E6E'
  },
  socialImage: {
    width: 50,
    height: 50
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5
  },
  signupTxt: {
    color: '#141414',
    fontSize: 20,
    marginTop: 15
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15
  },
  signupParas: {
    flexDirection: 'row',
    alignSelf: 'center'
  }
});

export default LoginScreen;
