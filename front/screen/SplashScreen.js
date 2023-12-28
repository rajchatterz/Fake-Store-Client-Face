import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import splashImage from '../assets/image/scart.png'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        },2000)
    })
  return (
      <ImageBackground style={styles.imageBackground} source={splashImage}>
          
    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center'
    }
})