import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const QR = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.seconds}>55 saniye</Text>
      <Text style={styles.seconds_description}>
        içinde QR kodun yenilenecek!
      </Text>
      <Image source={require("../../assets/qr.png")} />
      <Text style={styles.image_description}>
        {" "}
        QR kodu kasada okutarak veya internet alışverişlerinde altındaki kodu
        yazarak tekliflerden faydalanabilirsin.{" "}
      </Text>
      <Pressable style={styles.button}>
        <Entypo name="camera" size={17} color="white" />
        <Text style={styles.button_mid}>QR OKUT</Text>
        <Entypo name="chevron-small-up" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default QR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  seconds: {
    color: "#F26360",
    fontWeight: "500",
  },
  seconds_description: {},
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "dodgerblue",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 50,
    width: 300,
    marginTop: 20,
  },
  image_description: {
    textAlign: "center",
    paddingHorizontal: 60,
  },
  button_left: {},
  button_mid: {
    color: "white",
    fontWeight: "bold",
  },
  button_right: {},
});
