import React from 'react';
import { View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from './HomeScreen';
import ToolkitHomeScreen from './Toolkit/ToolkitHomeScreen';
import ForumeHomeScreen from './Forume/ForumeHomeScreen';
import MarketplaceHomeScreen from './Marketplace/MarketplaceHomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={HomeScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

function ToolkitStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ToolkitHome"
        component={ToolkitHomeScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

function ForumsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ForumeHome"
        component={ForumeHomeScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

function MarketplaceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MarketplaceHome"
        component={MarketplaceHomeScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

const RootScreen = (props) => {
    const {route} = props;
    const {stackname} = route.params;
    return (
      <Tab.Navigator
        initialRouteName={stackname ? stackname : 'Home'}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            
            var icon;
            size = 30;

            if (route.name === 'Home') {
              icon = 'home';
              color = focused ? '#A5593C' : '#707070'
            } else if (route.name === 'Toolkit') {
              icon = 'toolbox-outline';
              color = focused ? '#A5593C' : '#707070'
            } else if (route.name === 'Forums') {
              icon = 'message-circle';
              color = focused ? '#A5593C' : '#707070'
            }
            else if (route.name === 'Marketplace') {
              icon = 'tag-outline';
              color = focused ? '#A5593C' : '#707070'
            }
            
            return (
              <View>
                {icon == 'home' && <Octicons name={'home'} size={size} color={color}/>}
                {icon == 'toolbox-outline' && <MaterialCommunityIcons name={'toolbox-outline'} size={size} color={color}/>}
                {icon == 'message-circle' && <Feather name={'message-circle'} size={size} color={color}/>}
                {icon == 'tag-outline' && <MaterialCommunityIcons name={'tag-outline'} size={size} color={color}/>}
              </View>
            );
          },
        })}
        tabBarOptions={{
          showLabel: true,
          labelStyle: {fontSize: 10},
          activeTintColor: '#A5593C',
          inactiveTintColor: '#707070',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen
          name="Toolkit"
          component={ToolkitStack}
          options={{
            headerShown: false,
            gestureEnabled: false,
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Forums"
          component={ForumsStack}
          options={{
            headerShown: false,
            gestureEnabled: false,
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Marketplace"
          component={MarketplaceStack}
          options={{
            headerShown: false,
            gestureEnabled: false,
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    );
}

export default RootScreen;
