import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import BackgroundImage from '../components/BackgroundImage';
import RoundButton from '../components/RoundButton';
import LoadingOverlay from '../components/LoadingOverlay';
import Images from '../assets/Images'

const RegisterScreen = () => {

  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.flex}>
      <BackgroundImage backgroundImage={Images.main_bg_login} />
      <SafeAreaView style={styles.flex}>
        {loading && <LoadingOverlay />}
        <View>
          
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default RegisterScreen;
