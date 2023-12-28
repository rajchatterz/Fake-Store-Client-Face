import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState([]);
  const producrData = async () => {
    const fetchData = await axios.get('http://192.168.215.43:3001/admin');
    const response = fetchData.data;
    setData(response);
  };
  useEffect(() => {
    producrData();
  }, [data]);
  return (
    <View>
      {data.map((e, index) => (
        <Text key={index}>{e.name}</Text>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
