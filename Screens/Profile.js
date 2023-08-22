import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* User information or customization can be added here */}

      <Text style={styles.title}>Profile</Text>

      {/* List of options */}
      <View style={styles.optionContainer}>
        <OptionItem
          label="Manage Profile"
          onPress={() => navigation.navigate("ManageProfile")}
        />
        <OptionItem
          label="Change Password"
          onPress={() => navigation.navigate("ChangePassword")}
        />
        <OptionItem style={styles.redArea} label="Logout" />
        <OptionItem style={styles.redArea} label="Delete Account" />
      </View>
    </View>
  );
};

const OptionItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.optionItem} onPress={onPress}>
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Align vertically
    alignItems: "center", // Align horizontally
    padding: 50,
  },
  title: {
    color: "#0058AC",
    fontSize: 70,
    fontWeight: "800",
    marginBottom: 10,
  },

  optionContainer: {
    marginTop: 20,
    width: "80%",
  },
  optionItem: {
    padding: 15,
    marginBottom: 10,
    alignItems: "left",
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: "300",
  },
});

export default Profile;
