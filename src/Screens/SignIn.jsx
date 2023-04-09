import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../services/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SignIn = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user).then(() => {
          console.log("Email sent");
        });
        addDoc(collection(db, "users"), {
          displayName: name,
          email: email,
          uid: user.uid,
          createdAt: serverTimestamp(),
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container__view}>
        <Image
          source={require("../../assets/hopi_logo.png")}
          style={{ width: 110, height: 110 }}
        />
        <Text style={styles.paragraph_1}>Hopi'n seni cebinden tanır!</Text>
        <Text style={styles.paragraph_2}>
          Hopi üyeliğin için kullanmak istediğin adı, email adresini ve paralonı
          aşağıdaki alanlara yazmalısın
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ad"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          inputMode="email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Parola"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={handleSignIn} style={styles.button}>
          <Text style={styles.button__text}>Devam et</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  container__view: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    rowGap: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    width: "90%",
    height: 40,
    margin: 10,
    borderRadius: 5,
  },
  paragraph_1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph_2: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
  },
  button: {
    width: "90%",
    backgroundColor: "#CF2C7C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 15,
  },
  button__text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
