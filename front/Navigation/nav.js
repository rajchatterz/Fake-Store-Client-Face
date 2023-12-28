import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screen/LoginScreen'
const Stack = createNativeStackNavigator()
const Nav = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name='Login' component={LoginScreen } />
          </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav