import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Moneycik from "./MoneyBalancecik/Moneycik";
import Giftcik from "./MoneyBalancecik/Giftcik";
import Fuelcik from "./MoneyBalancecik/Fuelcik";
const Tab = createMaterialTopTabNavigator();

const MoneyBalance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TOPLAM PARACIK</Text>
      <Text style={styles.moneycik}>201,50</Text>
      <View style={styles.tabs_container}>
        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: {
              backgroundColor: "#4b4b4b",
              height: 3,
            },
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: "bold",
            },
          }}
          sceneContainerStyle={{
            backgroundColor: "transparent",
          }}
        >
          <Tab.Screen
            name="Moneycik"
            component={Moneycik}
            options={{ title: "PARACIK" }}
          />
          <Tab.Screen
            name="Giftcik"
            component={Giftcik}
            options={{ title: "HEDİYE PARACIK" }}
          />
          <Tab.Screen
            name="Fuelcik"
            component={Fuelcik}
            options={{ title: "AKARYAKIT PARACIK" }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default MoneyBalance;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 40,
    rowGap: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 13,
    color: "#4b4b4b88",
  },
  moneycik: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#F59324",
  },
  tabs_container: {
    width: width * 0.89,
    height: height * 0.4,
  },
});
