import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import WelcomeScreenItem from "../../components/WelcomeScreenItem";
import useGetDataFromFirebase from "../../hooks/useGetDataFromFirebase";
import useGetUserData from "../../hooks/useGetUserData";
import { useDispatch, useSelector } from "react-redux";
import {
  addWelcomeScreen,
  getWelcomeScreens,
  postWelcomeScreen,
  selectWelcomeError,
  selectWelcomeScreens,
  selectWelcomeStatus,
} from "./welcomeSlice";

const Welcome = ({ navigation }) => {
  // const { firebase_data: docs } = useGetDataFromFirebase("welcomeScreen");
  const screens = useSelector(selectWelcomeScreens);
  const status = useSelector(selectWelcomeStatus);
  const error = useSelector(selectWelcomeError);
  const dispatch = useDispatch();

  const addScreens = async () => {
    const newScreenData = {
      icon: "https://i.imgur.com/4ZQZ9Zu.png",
      text: "Hesaplarım",
      screenshot: "https://i.imgur.com/4ZQZ9Zu.png",
      screenName: "Accounts",
    };

    await dispatch(postWelcomeScreen(newScreenData));
  };

  // const addScreens = () => {
  //   dispatch(
  //     addWelcomeScreen({
  //       id: "7",
  //       icon: "https://i.imgur.com/4ZQZ9Zu.png",
  //       text: "Hesaplarım",
  //       screenshot: "https://i.imgur.com/4ZQZ9Zu.png",
  //       screenName: "Accounts",
  //     })
  //   );
  // };

  useEffect(() => {
    // @ts-ignore
    dispatch(getWelcomeScreens());
  }, [dispatch]);

  const { user_data } = useGetUserData();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Pressable onPress={addScreens}>
            <Text>Add Screens</Text>
          </Pressable>
          <Text style={styles.h1}>
            Hoş Geldin {user_data.map((item) => item?.displayName)}
          </Text>
          <Text style={styles.body_text}>Hopi ile ne yapmak istersin?</Text>
        </View>
        <View>
          {status === "loading" && <Text>Loading...</Text>}
          {status === "failed" && <Text>{error}</Text>}
          {status === "succeeded" && (
            <WelcomeScreenItem navigation={navigation} docs={screens} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: 30,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body_text: {
    fontSize: 16,
  },
});
