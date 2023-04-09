import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MyCards = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/card.jpg")}
      />
      <View style={styles.container_component}>
        <View style={styles.component1}>
          <Text style={styles.title}>Kredi / Banka Kartlarım</Text>
          <Text style={styles.subtitle}>
            Masterpass'e kartlarını kaydet, alışverişleirni hopi mobil ödeme ile
            kolayca yap.
          </Text>
        </View>
        <View style={styles.component2}>
          <Image
            style={styles.compenent2_image}
            source={require("../../../assets/mastercard.jpg")}
          />
          <Text style={styles.component2_title}>
            Masterpass Hesabını İlişkilendir
          </Text>
        </View>

        <View style={styles.component1}>
          <Text style={styles.title}>Ulaşım Kartlarım</Text>
          <Text style={styles.subtitle}>
            İstanbulkart'ını kaydederek kartlarına Paracık ile yükleme
            yapabilirsin
          </Text>
        </View>

        <View style={styles.component2}>
          <Image
            style={styles.compenent2_image}
            source={require("../../../assets/istanbul_card.jpg")}
          />
          <Text style={styles.component2_title}>İstanbulkart Ekle</Text>
        </View>
      </View>
    </View>
  );
};

export default MyCards;
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingHorizontal: width * 0.04,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 230,
    height: 180,
  },
  container_component: {
    gap: 40,
  },
  component1: {
    gap: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 11,
  },
  component2: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 15,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#01ADEE",
    borderRadius: 10,
  },
  compenent2_image: {
    width: 30,
    height: 20,
  },
  component2_title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#01ADEE",
  },
});
