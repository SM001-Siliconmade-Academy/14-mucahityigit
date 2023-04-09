import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Products from "../Screens/ProductsBrands/Products";
import Brands from "../Screens/ProductsBrands/Brands";

const Tab = createMaterialTopTabNavigator();

const ProductsBrands = () => {
  return (
    <Tab.Navigator initialRouteName="Products">
      <Tab.Screen
        name="Products"
        component={Products}
        options={{ title: "Ürünler" }}
      />
      <Tab.Screen
        name="Brands"
        component={Brands}
        options={{ title: "Markalar" }}
      />
    </Tab.Navigator>
  );
};

export default ProductsBrands;

const styles = StyleSheet.create({});
