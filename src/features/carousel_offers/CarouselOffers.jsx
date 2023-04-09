import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import useGetDataFromFirebase from "../../hooks/useGetDataFromFirebase";
import { useDispatch, useSelector } from "react-redux";
import {
  getCarouselOffersData,
  selectCarouselOffersData,
  selectCarouselOffersError,
  selectCarouselOffersStatus,
} from "./carouselOffersSlice";

const CarouselOffers = () => {
  // const { firebase_data: docs } = useGetDataFromFirebase("carouselOffers");
  const data = useSelector(selectCarouselOffersData);
  const status = useSelector(selectCarouselOffersStatus);
  const error = useSelector(selectCarouselOffersError);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getCarouselOffersData());
  }, [dispatch]);
  return (
    <View>
      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>{error}</Text>}
      {status === "succeeded" && (
        <FlatList
          horizontal
          keyExtractor={(item) => item.id}
          data={data}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          renderItem={({ item }) => (
            <Image
              style={styles.image}
              source={{
                uri: item.imageUrl,
              }}
            />
          )}
        />
      )}
    </View>
  );
};

export default CarouselOffers;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
  },
});
