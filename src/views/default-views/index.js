import React, { 
  lazy, 
  Suspense 
} from "react";

import { 
  DEFAULT_PREFIX_PATH 
} from 'configs/AppConfig';

import { 
  createStackNavigator 
} from '@react-navigation/stack';

import {
  Text
} from 'react-native';

const Stack = createStackNavigator();

export const DefaultViews = () => {

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="app">
        <Stack.Screen path={`${DEFAULT_PREFIX_PATH}/apps`} component={lazy(() => import(`./apps`))} name="app" />
      </Stack.Navigator>
    </Suspense>
  )
}

export default React.memo(DefaultViews);
