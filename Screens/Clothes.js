import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ToggleSwitch from "toggle-switch-react-native"; // Import a toggle switch library

const ClothesScreen = ({ navigation }) => {
  const [isLoose, setIsLoose] = useState(false); // Default to not wearing loose clothes
  const [isTight, setIsTight] = useState(false); // Default to not wearing tight clothes

  const handleToggle = (value) => {
    if (value === "loose") {
      setIsLoose(true);
      setIsTight(false);
    } else if (value === "tight") {
      setIsTight(true);
      setIsLoose(false);
    }
  };

  const handleMeasure = () => {
    // Perform measurement logic here
    navigation.navigate("MeasurementScreen"); // Navigate to the measurement screen
  };

  const isButtonDisabled = !isLoose && !isTight; // Disable button if no option selected

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Clothes</Text>
      <ToggleSwitch
        isOn={isLoose}
        onColor="#0058AC"
        offColor="#ccc"
        label="Loose"
        labelStyle={styles.toggleLabel}
        onToggle={() => handleToggle("loose")}
      />
      <ToggleSwitch
        isOn={isTight}
        onColor="#0058AC"
        offColor="#ccc"
        label="Tight"
        labelStyle={styles.toggleLabel}
        onToggle={() => handleToggle("tight")}
      />

      <TouchableOpacity
        style={[
          styles.measureButton,
          isButtonDisabled && styles.disabledButton,
        ]}
        onPress={handleMeasure}
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>Take Measurement</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  toggleLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  measureButton: {
    backgroundColor: "#0058AC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default ClothesScreen;
