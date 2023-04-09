import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import useGetDataFromFirebase from "./useGetDataFromFirebase";
import { getUsersData, selectUsersData } from "../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../services/firebase";

const useGetUserData = () => {
  // const { firebase_data: doc } = useGetDataFromFirebase("users");
  const data = useSelector(selectUsersData);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getUsersData());
  }, [dispatch]);
  const currentUser = auth.currentUser;
  const user_data = data?.map((item) => {
    if (item.email.toLowerCase() === currentUser?.email.toLowerCase()) {
      return item;
    }
  });
  return { user_data };
};

export default useGetUserData;

const styles = StyleSheet.create({});
