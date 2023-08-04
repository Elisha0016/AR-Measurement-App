import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Measurement = () => {
  return (
    <View style={styles.container}>
      <Text>Measurement</Text>
    </View>
  );
};

export default Measurement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Align vertically
    alignItems: "center", // Align horizontally
  },
});
