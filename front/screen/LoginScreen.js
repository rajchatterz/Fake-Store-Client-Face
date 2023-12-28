import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import background from '../assets/image/bcg.png'
const LoginScreen = () => {
  return (
      <ImageBackground style={styles.imageBackground} source={background}>
          
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode:'cover'
    }
})