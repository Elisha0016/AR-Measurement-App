import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ManageProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Profile</Text>
      {/* Add your Manage Profile content here */}
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  title: {
    color: "#0058AC",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },
  goBackButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  goBackButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ManageProfile;
