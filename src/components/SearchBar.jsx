import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native";

const SearchBar = ({ setFilter = null }) => {
  return (
    <View style={styles.container}>
      <FontAwesome style={styles.icon} name="search" size={20} />
      <TextInput
        placeholderTextColor={"#939090"}
        style={styles.input}
        placeholder="Marka veya Kampanya Ara"
        onChangeText={setFilter}
      />
      <FontAwesome
        style={styles.camera}
        name="camera"
        size={24}
        color="black"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "4%",
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 34,
    zIndex: 1,
    color: "#93909077",
  },
  input: {
    width: "85%",
    height: 50,
    borderRadius: 20,
    paddingLeft: 50,
    fontSize: 13,
    color: "#3C3A3A",
    borderWidth: 1,
    borderColor: "#84817a66",
  },
  camera: {
    color: "#34ace0",
  },
});
