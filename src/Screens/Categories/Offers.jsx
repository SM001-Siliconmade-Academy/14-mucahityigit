import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Categories } from "../../data/categories";

const Offers = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.all_offers_container}>
        <View style={styles.all_offers_tag_text_container}>
          <AntDesign name="tago" size={24} color="black" />
          <Text style={styles.all_offers_text}>Tüm Teklifleri Gör</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <FlatList
        data={Categories}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable>
            <Image style={styles.image} source={item.icon} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  all_offers_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 15,
    borderColor: "#bdc3c7",
  },
  all_offers_tag_text_container: {
    flexDirection: "row",
    columnGap: 15,
    alignItems: "center",
  },
  all_offers_text: {
    fontSize: 17,
  },
  image: {
    width: 200,
    height: 130,
    marginLeft: 10,
    borderRadius: 10,
  },
});
