import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screen/LoginScreen'
import SplashScreen from '../screen/SplashScreen'
import SignUpScreen from '../screen/SignUpScreen'
import HomeScreen from '../screen/HomeScreen'
import Details from '../component/Details'
const Stack = createNativeStackNavigator()
const Nav = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='splash' options={{ headerShown: false }} component={SplashScreen} />
          <Stack.Screen options={{headerShown:false}} name='Login' component={LoginScreen } />
          <Stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUpScreen} />
          <Stack.Screen options={{ headerShown: false }} name='Home' component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Nav