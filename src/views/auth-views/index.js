import React, { lazy, Suspense } from "react";
//import Loading from 'components/shared-components/Loading';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AppViews = () => {
  return (
    <Stack.Navigator initialRouteName="login">
        <Stack.Screen path={`${AUTH_PREFIX_PATH}/login`} component={lazy(() => import(`./authentication/login`))} name="login" />
        <Stack.Screen path={`${AUTH_PREFIX_PATH}/register`} component={lazy(() => import(`./authentication/register`))} name="register" />
      </Stack.Navigator>
  )
}

export default AppViews;

