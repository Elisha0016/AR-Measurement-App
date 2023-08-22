import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleTakeMeasurement = () => {
    navigation.navigate("Tutorial"); // Navigate to the "Tutorial" screen
  };
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

      <View style={styles.lowerHalf}>
        <Text style={styles.homeTextHead}>Welcome!</Text>
        <Text style={styles.homeText}>
          Body measurement taking has never been easier. Click the button below
          to start measuring.
        </Text>
        <TouchableOpacity
          onPress={handleTakeMeasurement}
          style={[styles.button, styles.button]}
        >
          <Text style={styles.buttonText}>Take measurement</Text>
        </TouchableOpacity>
      </View>
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
  },
  buttonText: {
    color: "#fff",
  },
  homeText: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  homeTextHead: {
    padding: 20,
    paddingBottom: 0.5,
    fontSize: 70,
    fontWeight: "bold",
    color: "#0058AC",
  },
  lowerHalf: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
