import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const TlBalance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Image
          style={styles.image}
          source={require("../../../assets/hopi_bakiye.jpg")}
        />
        <Text style={styles.description}>
          Hopipay kart içine kolayca para yükleyerek istediğin her yerde harcama
          yapabildiğin ücretsiz bir sanal karttır. Bu kartınla;
        </Text>
        <View style={styles.main_text_container}>
          <Ionicons name="checkmark-circle" size={24} color="#01B0EF" />
          <Text style={styles.main_text}>
            Hopi ile anlaşmalı markalarda paranı kat kat harcayabilirsin.
          </Text>
        </View>
        <View style={styles.main_text_container}>
          <Ionicons name="checkmark-circle" size={24} color="#01B0EF" />
          <Text style={styles.main_text}>
            Arkadaşlarına anında para gönderebilirsin.
          </Text>
        </View>

        <View style={styles.main_text_container}>
          <Ionicons name="checkmark-circle" size={24} color="#01B0EF" />
          <Text style={styles.main_text}>
            Tüm e-ticaret sitelerinde kolayca alışveriş yapabilirsin.
          </Text>
        </View>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#01B0EF", "#37B548"]}
        style={styles.button_container}
      >
        <Pressable>
          <Text style={styles.button}>HOPİPAY KARTINI AKTİVE ET</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default TlBalance;
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  image: {
    width: width * 0.92,
    height: 250,
    borderRadius: 10,
  },
  text_container: {
    width: width * 0.92,
    paddingTop: 20,
    paddingHorizontal: width * 0.04,
    rowGap: 20,
  },
  description: {
    fontSize: 13,
    color: "#4b4b4b99",
  },
  main_text_container: {
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
  },
  main_text: {
    fontSize: 12,
    color: "#4b4b4b99",
  },
  button_container: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: 50,
  },
  button: {
    color: "white",
    fontWeight: "bold",
  },
});
