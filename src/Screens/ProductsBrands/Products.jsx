import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductsComponent from '../../components/ProductsComponent';
import {productsData} from '../../data/productsData'
import SearchBar from '../../components/SearchBar';
const Products = () => {
      const [filter, setFilter] = useState("");
      const [data, setData] = useState([]);

        useEffect(() => {
            const newData = productsData.filter((item) =>
            item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
            );
            setData(newData);
        }, [filter]);
  return (
    <View style={styles.container}>
        <SearchBar setFilter={setFilter}/>
        <View style={styles.filter_area_container}>
            <Text style={styles.filter_area_text}>68.223 ürün</Text>
            <Pressable style={styles.filter_area_button}>
                <Text style={styles.filter_area_text}>
                    Sırala
                </Text>
                <Octicons style={styles.filter_area_icon} name="sort-desc" size={24} color="black" />
            </Pressable>
            <Pressable style={styles.filter_area_button}>
                <Text style={styles.filter_area_text}>
                    Filtrele
                </Text>
                <MaterialCommunityIcons style={styles.filter_area_icon} name="filter-variant-plus" size={24} color="black" />                
            </Pressable>
        </View>
        <View style={styles.products_container}>
            <FlatList
            keyExtractor={(item) => item.id}
            numColumns={2}
            data={data}
            contentContainerStyle={{
                gap:25
            }}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor:"#84817a66" }} />}
            renderItem={({ item }) => (
                <ProductsComponent title={item.title} icon={item.icon} brand={item.brand} category={item.category} price={item.price} />
            )}
        />
        </View>
    </View>
  )
}

export default Products
const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    filter_area_container:{
        width:width,
        height:height*.05,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        borderBottomWidth:1,
        borderBottomColor:"black"
    },
    filter_area_text:{
        fontSize:15,
        fontWeight:"700",
    },
    filter_area_button:{
        flexDirection:"row",
        gap:13,
        alignItems:"center"
    },
    filter_area_icon:{

    },
    products_container:{
        flexDirection:"row",
        gap:width*.08,
        paddingVertical:15
    }

})