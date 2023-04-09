import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import HomeBanner from "../../features/home_banner/HomeBanner";
import CarouselOffers from "../../features/carousel_offers/CarouselOffers";
import MyOffers from "../../features/my_offers/MyOffers";
import ClickWinItems from "../../features/click_win_items/ClickWinItems";

import useGetUserData from "../../hooks/useGetUserData";
import SearchBar from "../../components/SearchBar";
import { Pressable } from "react-native";
const Hopi = ({ navigation }) => {
  const { user_data } = useGetUserData();
  // const {currentText} = useFilter();
  return (
    <ScrollView nestedScrollEnabled style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Products")}>
        <SearchBar />
      </Pressable>
      <View style={styles.header}>
        <View style={styles.header__hi}>
          <MaterialIcons name="wb-sunny" size={24} color="#E4A44E" />
          <Text style={styles.header__hi__text}>
            Merhaba {user_data.map((item) => item?.displayName)}
          </Text>
        </View>
        <View style={styles.header__money}>
          <Text style={styles.header__money__top}>201.50 Paracık'ın var.</Text>
          <Text style={styles.header__money__mid}>
            1 Paracık = 1TL değerinde kullanabilirsin.
          </Text>
          <Text style={styles.header__money__bottom}>Paracıklarıma Git</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View>
          <View style={styles.body__top__texts}>
            <Text style={styles.body__top__text_left}>Teklif İncele</Text>
            <View style={styles.body__top__text_right_container}>
              <Text style={styles.body__top__text_right}>1/4</Text>
            </View>
          </View>
          <View>
            <CarouselOffers />
          </View>
        </View>
        <View style={styles.body__bottom}>
          <HomeBanner />
        </View>

        <View style={styles.my_offers}>
          <MyOffers />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footer__title}>Sevebileceğin Kategoriler</Text>
        <View style={styles.footer__content}>
          <View>
            <Image
              style={styles.image_lg}
              source={require("../../../assets/clothes_lg.png")}
            />
          </View>
          <View>
            <Image
              style={styles.image_sm}
              source={require("../../../assets/shoes_sm.png")}
            />
            <Image
              style={styles.image_sm}
              source={require("../../../assets/sports_sm.png")}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ClickWinItems />
        </View>
      </View>
    </ScrollView>
  );
};

export default Hopi;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    rowGap: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    columnGap: 20,
  },
  header__hi: {
    // alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 90,
    justifyContent: "center",
  },
  header__hi__text: {
    fontWeight: "500",
    width: 70,
    fontSize: 13,
  },
  header__money: {
    flex: 2,
    rowGap: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 100,
    justifyContent: "center",
  },
  header__money__top: {
    fontWeight: "800",
    color: "#E4A44E",
  },
  header__money__mid: {
    fontSize: 11,
  },
  header__money__bottom: {
    fontSize: 11,
    textDecorationLine: "underline",
    lineHeight: 20,
  },
  body: {
    rowGap: 20,
  },
  image: {
    height: 150,
    width: width * 0.92,
    borderRadius: 10,
    resizeMode: "contain",
  },
  body__top__texts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body__top__text_left: {
    fontWeight: "800",
    fontSize: 18,
    color: "#4C4C4C",
  },
  body__top__text_right_container: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: "#E0E0E0",
  },
  body__top__text_right: {
    fontSize: 11,
    width: 30,
    textAlign: "center",
  },
  body__bottom: {
    // rowGap: 10,
  },
  body__bottom_image: {
    height: 100,
    width: "100%",
  },
  footer: {
    backgroundColor: "#F9F9F9",
    rowGap: 10,
  },
  footer__content: {
    flexDirection: "row",
    columnGap: 10,
  },
  footer__title: {
    fontWeight: "800",
    fontSize: 18,
    color: "#4C4C4C",
  },
  image_lg: {
    width: 230,
    height: 250,
  },
  image_sm: {
    width: 160,
    height: 120,
  },
  my_offers: {},
});
