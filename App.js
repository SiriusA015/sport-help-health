import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './Navigation.js';
import store from './redux/store.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OneSignal from 'react-native-onesignal'; 

function myiOSPromptCallback(permission){
  console.log(permission)
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <SafeAreaProvider>
        <Provider store={ store }>
          <Navigation/>
        </Provider>
      </SafeAreaProvider>
    );
  };
}
  

