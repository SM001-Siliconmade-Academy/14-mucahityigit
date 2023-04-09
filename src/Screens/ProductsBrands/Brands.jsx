import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BrandComponent from '../../components/BrandComponent'

const Brands = () => {
  const brands = ["markafoni","lc waikiki","defacto","hotiç","beymen","altın yıldız", "gucci","lufian","les benjamins","bugatti"];

  return (
    <View style={styles.container}>
      {brands.map((item)=><BrandComponent item={item}/>)}
      <Pressable style={styles.button}>
        <Text style={styles.text}>ÜRÜNLERİ LİSTELE</Text>
      </Pressable>
    </View>
  )
}

export default Brands

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  button:{
    position:"absolute",
    bottom:0,
    width:"100%",
    padding:20,
    backgroundColor:"#95a5a6",
    textAlign:"center",
    borderRadius:5
  },
  text:{
    color:"white",
    fontWeight:"600",
    fontSize:17
  }
})