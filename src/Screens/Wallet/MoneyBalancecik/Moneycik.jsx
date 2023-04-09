import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Moneycik = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container_description}>Hopi ile anlaşmalı tüm marketlerde minimum 1,50 TL değerinde harcayabilirsin.</Text>
      <View style={styles.button_container}>
        <Pressable style={styles.button}>
            <Ionicons name="send-outline" size={20} color="white" />
            <Text style={styles.button_container_text}>PARACIK GÖNDER</Text>
            <Entypo name="chevron-right" size={18} color="white" />
        </Pressable>
      </View>
    </View>
  )
}

export default Moneycik

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        rowGap:30,
        paddingVertical:35,
    },
    container_description:{
        textAlign:"center",
        fontSize:12,
    },
    button_container:{
        width:320,
        height:50,
        backgroundColor:"#F59324",
        justifyContent:"center",
        paddingHorizontal:20,
        borderRadius:10
    },  
    button:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    button_container_text:{
        fontWeight:"bold",
        color:"white"
    }
})