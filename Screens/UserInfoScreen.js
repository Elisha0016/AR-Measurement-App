import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RNCamera } from "react-native-camera";
import Overlay from "./Overlay";

const UserInfoScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [isCmSelected, setIsCmSelected] = useState(true); // Default to cm
  const [isKgSelected, setIsKgSelected] = useState(true); // Default to kg
  const [isMaleSelected, setIsMaleSelected] = useState(true); // Default to male

  const handleNext = () => {
    // Perform any validation or data handling here
    // For simplicity, let's just navigate to the next screen
    navigation.navigate("NextScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Height</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isCmSelected && styles.toggleSelected]}
          onPress={() => setIsCmSelected(true)}
        >
          <Text style={styles.toggleText}>cm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isCmSelected && styles.toggleSelected]}
          onPress={() => setIsCmSelected(false)}
        >
          <Text style={styles.toggleText}>in</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Height"
        value={height}
        onChangeText={(text) => setHeight(text)}
        style={[styles.input, styles.smallInput]}
      />

      <Text style={styles.label}>Weight</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isKgSelected && styles.toggleSelected]}
          onPress={() => setIsKgSelected(true)}
        >
          <Text style={styles.toggleText}>kg</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isKgSelected && styles.toggleSelected]}
          onPress={() => setIsKgSelected(false)}
        >
          <Text style={styles.toggleText}>lbs</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        style={[styles.input, styles.smallInput]}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Sex</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isMaleSelected && styles.toggleSelected]}
          onPress={() => setIsMaleSelected(true)}
        >
          <Text style={styles.toggleText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            !isMaleSelected && styles.toggleSelected,
          ]}
          onPress={() => setIsMaleSelected(false)}
        >
          <Text style={styles.toggleText}>Female</Text>
        </TouchableOpacity>
      </View>

      {showCamera && (
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        />
      )}

      {/* Next button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 30,
    marginBottom: 5,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  smallInput: {
    width: "40%", // Adjust the width as needed
  },
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  toggleButton: {
    backgroundColor: "#ccc",
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  toggleSelected: {
    backgroundColor: "#0058AC",
  },
  toggleText: {
    color: "#fff",
  },
  nextButton: {
    backgroundColor: "#0058AC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  camera: {
    width: "100%",
    height: 300, // Adjust the height as needed
  },
});

export default UserInfoScreen;
