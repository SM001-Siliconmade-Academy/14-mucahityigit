import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeRoute from "./HomeRoute";
import Account from "../Screens/Account";
import { NavigationContainer } from "@react-navigation/native";
import QR from "../Screens/QR";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CategoriesRoute from "./CategoriesRoute";
import WalletRoute from "./WalletRoute";
import SignIn from "../Screens/SignIn";
import { auth } from "../services/firebase";
import Welcome from "../features/welcome/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../Screens/ProductsBrands/Products";
import ProductsBrands from "./ProductsBrandsRoute";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Router = () => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#000",
          }}
        >
          <Tab.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
              tabBarStyle: { display: "none" },
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="Home"
            component={HomeRoute}
            options={{
              tabBarLabel: "Ana Sayfa",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductsBrands}
            options={{
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="Categories"
            component={CategoriesRoute}
            options={{
              tabBarLabel: "Kategoriler",
              tabBarIcon: ({ color }) => (
                <AntDesign name="appstore1" size={24} color={color} />
              ),
              headerTitle: () => (
                <Text style={styles.categories_title}>Kategoriler</Text>
              ),
            }}
          />
          <Tab.Screen
            name="QR"
            component={QR}
            options={{
              headerTitle: () => null,
              headerLeft: () => (
                <View style={styles.header_left}>
                  <AntDesign name="questioncircleo" size={22} color="black" />
                  <Text style={styles.header_left}>Hopi QR Kodum</Text>
                </View>
              ),

              tabBarIcon: ({ color }) => (
                <Ionicons name="qr-code-outline" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Wallet"
            component={WalletRoute}
            options={{
              tabBarLabel: "Cüzdanım",
              tabBarIcon: ({ color }) => (
                <Ionicons name="wallet" color={color} size={28} />
              ),
              headerLeft: () => (
                <View style={styles.header_left}>
                  <AntDesign name="questioncircleo" size={22} color="black" />
                  <Text style={styles.header_left}>Cüzdanım</Text>
                </View>
              ),
              headerRight: () => (
                <Text style={styles.header_right}>İşlem Geçmişi</Text>
              ),
              headerTitle: () => null,
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: "Hesabım",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={30}
                />
              ),
              tabBarBadge: 7,
              headerLeft: () => <Text style={styles.header_left}>Hesabım</Text>,
              headerRight: () => (
                <Ionicons
                  style={styles.header_right}
                  name="settings-sharp"
                  size={24}
                  color="black"
                />
              ),
              headerTitle: () => null,
              headerStyle: {
                shadowRadius: 100,
              },
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  categories_title: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#7f8c8d",
  },
  header_left: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 20,
    flexDirection: "row",
  },
  header_right: {
    marginRight: 20,
    fontSize: 15,
    fontWeight: "600",
    color: "#4b4b4b",
  },
});
