import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import useGetDataFromFirebase from "../../hooks/useGetDataFromFirebase";
import {
  getHomeBannerData,
  selectHomeBannerData,
  selectHomeBannerError,
  selectHomeBannerStatus,
} from "./homeBannerSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeBanner = () => {
  // const { firebase_data: docs } = useGetDataFromFirebase("banners");
  const data = useSelector(selectHomeBannerData);
  const status = useSelector(selectHomeBannerStatus);
  const error = useSelector(selectHomeBannerError);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getHomeBannerData());
  }, [dispatch]);
  const handlePress = (url) => {
    return async () => {
      await WebBrowser.openBrowserAsync(url);
    };
  };
  return (
    <View style={styles.container}>
      {data.map((post) => (
        <Pressable onPress={handlePress(post.visitUrl)} key={post.id}>
          <Image style={styles.image} source={{ uri: post.imageUrl }} />
        </Pressable>
      ))}
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  image: {
    height: 120,
    resizeMode: "contain",
  },
});
