import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import useGetDataFromFirebase from "../../hooks/useGetDataFromFirebase";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyOffersData,
  selectMyOffersData,
  selectMyOffersError,
  selectMyOffersStatus,
} from "./myOffersSlice";
const MyOffers = () => {
  // const { firebase_data: docs } = useGetDataFromFirebase("myOffers");
  const data = useSelector(selectMyOffersData);
  const status = useSelector(selectMyOffersStatus);
  const error = useSelector(selectMyOffersError);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getMyOffersData());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>{error}</Text>}
      {status === "succeeded" && (
        <>
          <View style={styles.head}>
            <Text style={styles.head__my_offers}>Tekliflerim</Text>
            <Text>
              Tümünü Gör <AntDesign name="right" size={12} color="black" />
            </Text>
          </View>
          <View>
            <FlatList
              horizontal
              data={data}
              renderItem={({ item }) => (
                <View style={styles.flatlist_container}>
                  <Image style={styles.image} source={{ uri: item.imageUrl }} />
                  <Text style={styles.brandName}>{item.brandName}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default MyOffers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderColor: "dodgerblue",
    borderRadius: 10,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  head__my_offers: {
    fontSize: 18,
    fontWeight: "bold",
  },
  flatlist_container: {
    gap: 5,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 20,
  },
  brandName: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "300",
    width: 200,
  },
  description: {
    fontWeight: "bold",
    color: "dodgerblue",
  },
});
