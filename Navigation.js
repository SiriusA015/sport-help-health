import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from './src/screens/FirstScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import RootScreen from './src/screens/RootScreen';
import HearAboutUsScreen from './src/screens/HearAboutUsScreen';
import GoalScreen from './src/screens/GoalScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="HearAboutUs"
          component={HearAboutUsScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Goal"
          component={GoalScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Root"
          component={RootScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
