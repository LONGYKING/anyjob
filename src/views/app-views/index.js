import React, { lazy, Suspense, useEffect } from "react";

import { APP_PREFIX_PATH } from 'configs/AppConfig'

import { privateScreens } from 'configs/NavigationConfig'

import {Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const Dashboards = ({navigation}) => {

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Tab.Navigator
        initialRouteName="news"
        keyboardDismissMode="on-drag"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: '#fff' }}
        tabBarPosition="bottom"
        removeClippedSubviews={true}
        tabBarOptions={{
          showIcon: true,
          showLabel: false
        }}
      >
        {privateScreens.map(nav => (

          <Tab.Screen 
            key={nav.name}
            name={nav.name} 
            component={lazy(() => nav.tab === 'chat' ? import(`./chat`) : import(`./profile`))} 
            options={{
              tabBarLabel: nav.title,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name={nav.icon} color={color} size={20} />
              ),
            }}
          />
                            
        )
        )}
      </Tab.Navigator>
    </Suspense>
  )
}

export default React.memo(Dashboards);
