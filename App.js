import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUp from "./Screens/SignUp";
import SignIn from "./Screens/SignIn";
import HomeScreen from "./Screens/HomeScreen";
import Measurement from "./Screens/Measurement";
import Profile from "./Screens/Profile";
import ManageProfile from "./Screens/ManageProfile"; // Import your ManageProfile screen
import ChangePassword from "./Screens/ChangePassword"; // Import your ChangePassword screen
import TutorialScreen from "./Screens/TutorialScreen";
import UserInfoScreen from "./Screens/UserInfoScreen";
import ClothesScreen from "./Screens/Clothes";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#0058AC", // Change the color here for active tab
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Measurement"
        component={Measurement}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  );
}

function AuthStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen name="Sign up" component={SignUp} />
      {/* Add other authentication-related screens here */}
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen name="ManageProfile" component={ManageProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={AuthStackScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeTabScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tutorial"
          component={TutorialScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UserInfoScreen"
          component={UserInfoScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ClothesScreen"
          component={ClothesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
