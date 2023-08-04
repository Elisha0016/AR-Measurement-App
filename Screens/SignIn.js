import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    if (email && password) {
      setIsLoading(true);
      setError("");
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data);
          setIsLoading(false);
          navigation.navigate("Home");
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setError("Invalid email or password. Please try again."); // Set the error message
        });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.Container} behavior="padding">
      <Image source={require("../Assets/onBoard.png")} style={styles.logo} />
      <View style={styles.inputContaianer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Email"
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Password"
          defaultValue={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />

        {error !== "" && <Text style={styles.errorText}>{error}</Text>}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignIn}
            style={styles.button}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" /> // Show loading indicator while loading
            ) : (
              <Text style={styles.buttonText}>Sign in</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.directionText}>Dont have an account yet?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign up")}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 1,
  },
  inputContaianer: {
    width: "80%",
  },
  inputLabel: {
    margin: 12,
    paddingVertical: 2,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0058AC",
    width: "100%",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
  },
  buttonOutline: {
    backgroundColor: "#00000000",
    marginTop: 7,
    boarderColor: "#0058AC",
    borderWidth: 2,
    borderColor: "#0058AC",
    borderRadius: 5,
  },
  buttonOutlineText: {
    color: "#0058AC",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  directionText: {
    padding: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});
