import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductsComponent = ({title,icon,brand,category,price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image_container_image} source={icon}/>
      </View>
      <Text style={styles.container_text1}>{title}</Text>
      <Text style={styles.container_text2}>{category}</Text>
      <Text style={styles.container_text1}>{brand}</Text>
      <Text style={styles.container_text3}>{price}</Text>
    </View>
  )
}

export default ProductsComponent

const styles = StyleSheet.create({
  container:{
    width:"50%",
    paddingHorizontal:30
  },
  image_container:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:10
  },
  image_container_image:{
    width:120,
    height:170
  },
  container_text1:{
    fontSize:14,
    fontWeight:"bold",
  },
  container_text2:{
    color:"#84817a88",
    marginBottom:10
  },
  container_text3:{
    fontSize:17,
    fontWeight:"600",
    color:"#34ace0",
    marginTop:10,
    marginBottom:25
  }
})