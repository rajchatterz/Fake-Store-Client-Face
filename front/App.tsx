import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
const App = () => {
  const producrData = async () => {
    const fetchData = await axios.get('http://192.168.215.43:3001/admin');
    const response = fetchData.data;
    console.log(response);
  };
  useEffect(() => {
    producrData();
  });
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
