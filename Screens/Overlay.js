import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Modal } from "react-native";

const Overlay = ({ visible, message }) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#0058AC" />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  overlay: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  message: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default Overlay;
