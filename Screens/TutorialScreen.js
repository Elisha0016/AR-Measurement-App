import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const TutorialScreen = ({ navigation }) => {
  const [tutorialStep, setTutorialStep] = useState(1);

  const handleNext = () => {
    if (tutorialStep < 8) {
      setTutorialStep(tutorialStep + 1);
    } else {
      navigation.navigate("UserInfoScreen");
    }
  };

  const handleBack = () => {
    if (tutorialStep > 1) {
      setTutorialStep(tutorialStep - 1);
    } else {
      // If no previous content, navigate back to HomeScreen
      navigation.goBack();
    }
  };

  const imageSources = [
    require("../Assets/contrast.jpg"), // Replace with the actual image paths
    require("../Assets/Hair.jpg"),
    require("../Assets/accuracy.jpg"),
    require("../Assets/FeetPose.jpg"),
    require("../Assets/ArmPose.jpg"),
    require("../Assets/DevicePlace.jpg"),
    require("../Assets/SideDevicePlace.jpg"),
    require("../Assets/SidePose.jpg"),

    // Add more image paths for each step
  ];

  let content = null;

  switch (tutorialStep) {
    case 1:
      content = "Step 1: Introduction to the app...";
      break;
    case 2:
      content = "Step 2: How to take measurements...";
      break;
    case 3:
      content = "Step 3: Tips for accurate measurements...";
      break;
    case 4:
      content = "Step 4: Tips for accurate measurements...";
      break;
    default:
      break;
  }

  return (
    <View style={styles.container}>
      {
        <Image
          source={imageSources[tutorialStep - 1]} // Use the appropriate image source for the current step
          style={{ width: 340, height: 340 }}
        />
      }
      <Text style={styles.tutorialText}>{content}</Text>

      {/* Next button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      {/* Go back button */}
      <TouchableOpacity style={styles.goBackButton} onPress={handleBack}>
        <Text style={styles.buttonText}>Go Back</Text>
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
  tutorialText: {
    fontSize: 18,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  nextButton: {
    position: "absolute",
    bottom: 50,
    right: 20,
    backgroundColor: "#0058AC",
    padding: 10,
    borderRadius: 5,
  },
  goBackButton: {
    position: "absolute",
    bottom: 50,
    left: 20,
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});

export default TutorialScreen;
