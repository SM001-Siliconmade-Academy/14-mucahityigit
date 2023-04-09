import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const WelcomeScreenItem = ({ docs, navigation }) => {
  const handlePress = (screenName) => {
    screenName === "Wallet"
      ? navigation.navigate("Wallet")
      : navigation.navigate("Home", { screen: screenName });
  };
  return (
    <>
      {docs.map((post) => (
        <Pressable onPress={() => handlePress(post.screenName)}>
          <View style={styles.container} key={post.id}>
            <View style={styles.icon_text}>
              <Image
                style={styles.icon}
                source={{
                  uri: post.icon,
                }}
              />
              <Text style={styles.text}>{post.text}</Text>
            </View>
            <Image
              style={styles.screenshot}
              source={{
                uri: post.screenshot,
              }}
            />
            <MaterialCommunityIcons
              name="arrow-right-thick"
              size={24}
              color="grey"
            />
          </View>
        </Pressable>
      ))}
    </>
  );
};

export default WelcomeScreenItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: {
    fontSize: 16,
    width: 220,
  },
  icon_text: {
    gap: 10,
  },
  icon: { width: 95, height: 50 },
  screenshot: { width: 95, height: 95 },
});
