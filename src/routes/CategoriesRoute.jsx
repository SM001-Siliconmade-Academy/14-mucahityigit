import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Offers from "../Screens/Categories/Offers";
import Brands from "../Screens/Categories/Brands";

const Tab = createMaterialTopTabNavigator();

const CategoriesRoute = () => {
  return (
    <Tab.Navigator initialRouteName="Offers">
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{ title: "Teklifler" }}
      />
      <Tab.Screen
        name="Brands"
        component={Brands}
        options={{ title: "Markalar" }}
      />
    </Tab.Navigator>
  );
};

export default CategoriesRoute;

const styles = StyleSheet.create({});
