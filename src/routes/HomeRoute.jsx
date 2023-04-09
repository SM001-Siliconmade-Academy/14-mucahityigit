import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Hopi from "../Screens/Home/Hopi";
import HopiShop from "../Screens/Home/HopiShop";
import { auth } from "../services/firebase";

const Tab = createMaterialTopTabNavigator();
const HomeRoute = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Hopi"
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: "#E02C89",
            height: 3,
          },
        }}
      >
        <Tab.Screen
          name="Hopi"
          component={Hopi}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../assets/hopi_logo.png")}
                style={{ width: 40, height: 38 }}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="HopiShop"
          component={HopiShop}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../assets/hopi_shop.png")}
                style={{ width: 60, height: 38 }}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeRoute;

const styles = StyleSheet.create({});
