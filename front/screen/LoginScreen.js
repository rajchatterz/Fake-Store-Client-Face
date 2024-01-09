import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated,{FadeInUp,FadeInDown} from 'react-native-reanimated';
import background from '../assets/image/bcg.png';
import axios from 'axios';


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const storeUserData = async() => {
    try {
      await AsyncStorage.setItem('isLoggedIn','true')
      await AsyncStorage.setItem('userEmail',email)
    } catch (error) {
      console.error(error);
    }
  }
  const fetchData = async () => {
      try {
          let url = `http://192.168.222.43:3001/register/${email}`;
            let response = await axios.get(url)
            let result = response.data
        if (result.password === password) {
              storeUserData()
                navigation.navigate('Home')
            } else {
                setPasswordError(true);
            }
            } catch (error) {
            setPasswordError(true);
            }
  };


  return (
    <ImageBackground style={styles.imageBackground} source={background}>
      <View style={styles.inputContainer}>
        <Animated.Image entering={FadeInUp.duration(1000).springify()} style={styles.cartImage} source={require('../assets/image/cart.png')} />
        <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()}>
          <TextInput onChangeText={(text) => setEmail(text)} placeholder='Email' style={styles.inputView} />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(400).duration(1000).springify()}>
          <TextInput onChangeText={(text) => [setPassword(text),setPasswordError(false)]} placeholder='Password' secureTextEntry={true} style={styles.inputView} />
          {passwordError ? <Text style={styles.errorText}>Invalid credentials</Text> : null}
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()}>
          <TouchableOpacity onPress={()=>fetchData()} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} style={styles.registerBtn}>
          <Text style={{ fontWeight: '500', color: 'black' }}>Don't have an account</Text>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={styles.opText}>Register Here</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  inputView: {
    backgroundColor: 'white',
    width: 320,
    height: 50,
    borderRadius: 10,
    fontWeight: '700',
    color: '#5b523f',
    paddingHorizontal: 10,
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  buttonContainer: {
    width: 140,
    backgroundColor: '#fd8ba0',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cartImage: {
    height: 200,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '900',
  },
  registerBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    width: 300,
  },
  opText: {
    fontWeight: '900',
    marginRight: 10,
    color: '#c50808',
  },
  errorText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 12,
  },
});

export default LoginScreen;
