import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Show = () => {
    const cartData = useSelector((state) => state.reducer)
    const [cartItem, setCartItem] = useState(0)
    useEffect(() => {
        setCartItem(cartData.length)
    },[cartData])
  return (
    <View>
      <Text style={{fontSize:30}}>{cartItem}</Text>
    </View>
  )
}

export default Show

const styles = StyleSheet.create({})