import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen.js';
import AboutScreen from './screens/AboutScreen.js';
import MapScreen from './screens/MapScreen.js';
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              gestureEnabled: true, // set to true by default on ios but not on android
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              gestureEnabled: true,
            }}
          />
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{
              gestureEnabled: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
