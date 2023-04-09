import { StyleSheet, Text, View } from "react-native";
import { useEffect, useMemo, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

const useGetDataFromFirebase = (collectionName) => {
  const [data, setData] = useState([]);
  const dataRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(dataRef);
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      setData(dataArray);
    };
    getData();
  }, []);

  const firebase_data = useMemo(() => data, [data]);

  return { firebase_data };
};

export default useGetDataFromFirebase;

const styles = StyleSheet.create({});
