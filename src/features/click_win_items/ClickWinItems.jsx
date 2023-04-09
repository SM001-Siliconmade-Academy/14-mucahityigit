import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import useGetDataFromFirebase from "../../hooks/useGetDataFromFirebase";
import { AntDesign } from "@expo/vector-icons";
import {
  getClickWinItemsData,
  selectClickWinItemsData,
  selectClickWinItemsError,
  selectClickWinItemsStatus,
} from "./clickWinItemsSlice";
import { useDispatch, useSelector } from "react-redux";

const ClickWinItems = () => {
  // const { firebase_data: docs } = useGetDataFromFirebase("clickWinItems");
  const data = useSelector(selectClickWinItemsData);
  const status = useSelector(selectClickWinItemsStatus);
  const error = useSelector(selectClickWinItemsError);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getClickWinItemsData());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>{error}</Text>}
      {status === "succeeded" && (
        <>
          <View style={styles.head}>
            <Text style={styles.head__my_offers}>Tıkla Kazan</Text>
            <Text>
              Tümünü Gör <AntDesign name="right" size={12} color="black" />
            </Text>
          </View>
          <ScrollView horizontal>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={({ item }) => (
                <View style={styles.list_container} key={item.id}>
                  <Image style={styles.image} source={{ uri: item.imageUrl }} />
                  <View style={styles.text_container}>
                    <Text style={styles.brandName}>{item.brandName}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                  <Pressable style={styles.button}>
                    <Text>Kazan</Text>
                  </Pressable>
                </View>
              )}
            />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default ClickWinItems;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 10,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  head__my_offers: {
    fontSize: 18,
    fontWeight: "bold",
  },
  list_container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 10,
    gap: 20,
    width: width * 0.8,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  text_container: {
    rowGap: 5,
  },
  brandName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#06BCF2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginLeft: "auto",
  },
});
