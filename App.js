/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler'; // for React Navigation
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

import About from './screens/About';
import Home from './screens/Home';
import Search from './screens/Search';

enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{title: 'Search'}}
        />
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
