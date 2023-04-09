import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const BrandComponent = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
      <AntDesign style={styles.icon} name="checkcircleo" size={24} color="#95a5a6" />
    </View>
  )
}

export default BrandComponent

const styles = StyleSheet.create({
    container:{
        paddingVertical:15,
        paddingHorizontal:5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"#95a5a6",
        textTransform:"uppercase"
    },
    text:{
        color:"#95a5a6"
    },
    icon:{}
})