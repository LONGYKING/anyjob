/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';

import { 
  GlobalProvider 
} from "./src/context/provider";

import { 
  NavigationContainer 
} from '@react-navigation/native';

import { 
  createStackNavigator 
} from '@react-navigation/stack';

import Views from './src/views';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <GlobalProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }} 
          >
            <Stack.Screen 
              name="base" 
              component={Views} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalProvider>
    </>
  );
};

export default App;