import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useGetUserData from "../hooks/useGetUserData";
const Account = () => {
  const { user_data } = useGetUserData();

  return (
    <View style={styles.container}>
      <View style={styles.profile_box}>
        <Image
          style={styles.profile_pic}
          source={require("../../assets/profile_pic.png")}
        />
        <Text style={styles.profile_text}>
          {user_data.map((item) => item?.displayName)}
        </Text>
        <AntDesign name="edit" size={18} color="black" />
      </View>
      <View style={styles.list_box}>
        <View style={styles.list_item}>
          <View style={styles.icon_text}>
            <MaterialCommunityIcons name="bell" size={24} color="black" />
            <Text style={styles.list_item_text}>Bildirimlerim</Text>
          </View>
          <View style={styles.notification_box}>
            <Text style={styles.notification}>7</Text>
            <AntDesign name="right" size={18} color="black" />
          </View>
        </View>

        <View style={styles.list_item}>
          <View style={styles.icon_text}>
            <MaterialCommunityIcons name="star" size={24} color="black" />
            <Text style={styles.list_item_text}>Listelerim</Text>
          </View>
          <AntDesign name="right" size={18} color="black" />
        </View>

        <View style={styles.list_item}>
          <View style={styles.icon_text}>
            <MaterialCommunityIcons
              name="phone-in-talk"
              size={24}
              color="black"
            />
            <Text style={styles.list_item_text}>Müşteri Hizmetleri</Text>
          </View>
          <AntDesign name="right" size={18} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {},
  profile_box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  profile_pic: {
    width: 65,
    height: 65,
  },
  profile_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  list_box: {},
  notification_box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  list_item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  list_item_text: {},
  notification: {
    backgroundColor: "#3CAEEC",
    color: "white",
    padding: 5,
    borderRadius: 10,
  },
  icon_text: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
