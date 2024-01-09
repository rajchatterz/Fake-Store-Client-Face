import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import Show from './Show';

const Details = () => {
  const products = [
    {
      name: 'samsung',
      price: 12000,
      color: 'pink',
      image:
        'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911blibins/gallery/in-galaxy-s23-s911-446648-sm-s911blibins-536009999?$650_519_PNG$',
    },
    {
      name: 'iphone',
      price: 40000,
      color: 'blue',
      image:
        'https://rukminim1.flixcart.com/image/850/1000/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=90',
    },
    {
      name: 'oppo',
      price: 25000,
      color: 'pink',
      image:
        'https://media.croma.com/image/upload/v1662438156/Croma%20Assets/Communication/Mobiles/Images/243541_rgk8td.png',
    },
    {
      name: 'vivo',
      price: 30000,
      color: 'pink',
      image:
        'https://i.gadgets360cdn.com/products/large/Vivo-V29-Pro-DB-709x800-1696408192.jpg',
    },
    {
      name: 'nokia',
      price: 50000,
      color: 'pink',
      image:
        'https://images.ctfassets.net/wcfotm6rrl7u/vvSc7YrV8mtIezVCmEQTa/666a8a3818c7cd631a779bfd0b89aadb/nokia-5_4-dusk-front_back-int.png',
    },
    {
      name: 'nokia',
      price: 50000,
      color: 'pink',
      image:
        'https://images.ctfassets.net/wcfotm6rrl7u/vvSc7YrV8mtIezVCmEQTa/666a8a3818c7cd631a779bfd0b89aadb/nokia-5_4-dusk-front_back-int.png',
    },
    {
      name: 'nokia',
      price: 50000,
      color: 'pink',
      image:
        'https://images.ctfassets.net/wcfotm6rrl7u/vvSc7YrV8mtIezVCmEQTa/666a8a3818c7cd631a779bfd0b89aadb/nokia-5_4-dusk-front_back-int.png',
    },
    {
      name: 'nokia',
      price: 50000,
      color: 'pink',
      image:
        'https://images.ctfassets.net/wcfotm6rrl7u/vvSc7YrV8mtIezVCmEQTa/666a8a3818c7cd631a779bfd0b89aadb/nokia-5_4-dusk-front_back-int.png',
    },
  ];

  return (
    <View>
      <Show />

              
        <HomeScreen item={products} />


</View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});
