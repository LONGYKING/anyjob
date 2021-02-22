import React, { 
  lazy, 
  Suspense 
} from "react";

import { 
  createStackNavigator 
} from '@react-navigation/stack';

import {
  Text
} from 'react-native';

const Stack = createStackNavigator();

const Apps = ({ match }) => (
  <Suspense fallback={<Text>Loading...</Text>}>
    <Stack.Navigator initialRouteName="home">
        <Stack.Screen path={`${match.url}/home`} component={lazy(() => import(`./homePage`))} name="home" />
    </Stack.Navigator>
  </Suspense>
);

export default Apps;