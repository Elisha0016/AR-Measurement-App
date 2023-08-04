import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <View style={styles.rectangle}>
          <Image
            source={require("../Assets/tailor1.jpg")} // Replace with the path to your first image
            style={{ width: "100%", height: "100%", borderRadius: 15 }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.rectangle}>
          <Image
            source={require("../Assets/tailor2.jpg")} // Replace with the path to your first image
            style={{ width: "100%", height: "100%", borderRadius: 15 }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.rectangle}>
          <Image
            source={require("../Assets/tape.jpg")} // Replace with the path to your first image
            style={{ width: "100%", height: "100%", borderRadius: 15 }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.rectangle}>
          <Image
            source={require("../Assets/clothes.jpg")} // Replace with the path to your first image
            style={{ width: "100%", height: "100%", borderRadius: 15 }}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => console.log("Button Clicked")}
        style={[styles.button, styles.button]}
      >
        <Text style={styles.buttonText}>Take measurement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  rectangle: {
    width: 265,
    height: 400,
    backgroundColor: "grey",
    borderRadius: 15,
    marginHorizontal: 17,
    marginTop: 90,
  },
  button: {
    backgroundColor: "#0058AC",
    width: "90%",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center", // Align the button to the center horizontally
    position: "relative",
    bottom: -200, // Adjust the bottom value to control the distance from the bottom
  },
  buttonText: {
    color: "#fff",
  },
});

export default HomeScreen;
