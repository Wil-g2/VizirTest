import React from "react";
import { Naviga, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Dashboard from "../pages/Dashboard";

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Telzir"
          component={Dashboard}
          options={{
            headerShown: true,
            headerTintColor: "#ff5c73",
            headerStyle: { backgroundColor: "#fff" },
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
