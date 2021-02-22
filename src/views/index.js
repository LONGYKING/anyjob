import AppLayout              from "layouts/app-layout";
import AuthLayout             from 'layouts/auth-layout';
import DefaultLayout          from 'layouts/default-layout';
import AppLocale              from "lang";
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import React, { 
  useContext 
} from "react";

import { 
  IntlProvider 
} from "react-intl";

import { 
  ConfigProvider 
} from '@ant-design/react-native';

import { 
  APP_PREFIX_PATH, 
  AUTH_PREFIX_PATH, 
  DEFAULT_PREFIX_PATH 
} from 'configs/AppConfig'

import { 
  GlobalContext 
} from "context/provider";

import {
  Button, 
  Text
} from 'native-base';

import { 
  createStackNavigator 
} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Views = ( {navigation} ) => {
  const {

    state    : { themeState : { locale }, authState : { auth : { token } } },
    dispatch : { themeDispatch, authDispatch }

  } = useContext(GlobalContext);
  const currentAppLocale = AppLocale[locale];
  return (
    <Stack.Navigator 
      initialRouteName="/"
      screenOptions={{
        title:"",
        headerRight: () => {
          <Text style={{color: '#333'}}>Back</Text>
        },

        headerLeft: () => (
          <>
            <Button
              hasText
              onPress={() => navigation.goBack()}
              style={{backgroundColor: 'transparent', marginLeft:6,shadowColor: '#fff',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0}}
            
          >
              <MaterialCommunityIcons name="ios-chevron-back" color="#333" size={20} />
              <Text style={{color: '#333'}}>Back</Text>
          </Button>
          
          </>
        ),
      }} 
    >
          <Stack.Screen path={`${DEFAULT_PREFIX_PATH}/apps`} component={AppLayout} name="/" />
    </Stack.Navigator>
  )
}

export default Views;