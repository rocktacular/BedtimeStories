/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler'; // for React Navigation
import React from 'react';

import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import About from './screens/About';
import Home from './screens/Home';

const Stack = createStackNavigator();

const Test = () => {
  return (
    <View>
      <Text>SDFSDFSDF</Text>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome Title'}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'About Title'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
