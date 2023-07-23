import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    if (email && password) {
      setLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setLoading(false);
          setSuccessModalVisible(true);
          handleSuccessModalClose(); // Call handleSuccessModalClose to navigate to the sign-in screen
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          Alert.alert("Error", "Failed to sign up. Please try again.");
        });
    }
  };

  const handleSuccessModalClose = () => {
    setSuccessModalVisible(false);
    navigation.navigate("Sign in"); // Navigate to the sign-in screen after successful sign up
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleCreateAccount}
            style={[styles.button, { opacity: loading ? 0.3 : 1 }]}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Sign in")}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Loading Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#0058AC" />
        </View>
      </Modal>

      {/* Success Modal */}
    </KeyboardAvoidingView>
  );
};

export default SignUp;

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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  successText: {
    fontSize: 20,
    color: "#fff",
  },
});
