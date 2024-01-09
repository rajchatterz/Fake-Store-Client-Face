import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../component/redux/action';

const HomeScreen = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.reducer);

  const sendData = (item) => {
    setIsAdded(true) // Set as added when 'Add' is pressed
    dispatch(addToCart(item));
  };

  const removeItem = (item) => {
    setIsAdded(false) // Set as not added when 'Remove' is pressed
    // Implement logic to remove the item from the cart if needed
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Text>{item.color}</Text>
      {isAdded ? (
        <Button title='Remove' onPress={() => removeItem(item)} />
      ) : (
        <Button title='Add' onPress={() => sendData(item)} />
      )}
    </View>
  );

  return (
    <FlatList
      data={props.item}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={styles.container}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  container: {
    padding: 10,
    margin: 20,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: 'pink',
  },
});
