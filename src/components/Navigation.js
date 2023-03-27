import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import Home_Screen from "../screens/Home_Screen";
import Login_Screen from "../screens/Login_Screen";
import Register_Screen from "../screens/Register_Screen";
import Start from "../screens/Start";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Login"
          component={Login_Screen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home_Screen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register_Screen}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
