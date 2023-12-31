import React from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Show from '../component/Show';
import { addToCart } from '../component/redux/action';
import { useDispatch } from 'react-redux';
const dispatch = useDispatch()
const HomeScreen = () => {
  const Product = [
    {
      name: 'samsung',
      price: 12000,
      color: 'pink',
      image:'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911blibins/gallery/in-galaxy-s23-s911-446648-sm-s911blibins-536009999?$650_519_PNG$'
    },
    {
      name: 'iphone',
      price: 40000,
      color: 'blue',
      image:'https://rukminim1.flixcart.com/image/850/1000/xif0q/mobile/5/w/3/-original-imaghxcpnf8aay8h.jpeg?q=90'
    },
    {
      name: 'oppo',
      price: 25000,
      color: 'pink',
      image:'https://media.croma.com/image/upload/v1662438156/Croma%20Assets/Communication/Mobiles/Images/243541_rgk8td.png'
    },
    {
      name: 'vivo',
      price: 30000,
      color: 'pink',
      image:'https://i.gadgets360cdn.com/products/large/Vivo-V29-Pro-DB-709x800-1696408192.jpg'
    },
    {
      name: 'nokia',
      price: 50000,
      color: 'pink',
      image:'https://images.ctfassets.net/wcfotm6rrl7u/vvSc7YrV8mtIezVCmEQTa/666a8a3818c7cd631a779bfd0b89aadb/nokia-5_4-dusk-front_back-int.png'
    },
    {
      name: 'nokia',
      price: 50000,
      color: 'pink',
      image:'https://images.ctfassets.net/wcfotm6rrl7u/vvSc7YrV8mtIezVCmEQTa/666a8a3818c7cd631a779bfd0b89aadb/nokia-5_4-dusk-front_back-int.png'
    }
  ]
  const handleClick = (item) => {
    dispatch(addToCart(item))
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button title='Add Item' onPress={()=>handleClick(item)}/>
    </View>
  );

  return (
    <View>
      <Show />
      <FlatList
        data={Product}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.container}
        numColumns={2} // Specify the number of columns you want in the grid
        columnWrapperStyle={styles.row} // To style the rows
      />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  item: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  row: {
    justifyContent: 'space-between',
  },
});




