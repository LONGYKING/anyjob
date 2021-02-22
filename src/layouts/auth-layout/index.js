import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthViews from 'views/auth-views'

const Stack = createStackNavigator();

export const AuthLayout = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
        	<Stack.Screen name="Home" component={AuthViews} />
      	</Stack.Navigator>
	)
}


export default AuthLayout
