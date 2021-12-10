import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Import Theme Native Base

// Import Screen
import Home from "./screen/home"
import Done from "./screen/done"
import AddToDo from "./screen/addTodo"
import EditToDo from "./screen/edit"

// Create Stack Navigation
const Stack = createStackNavigator();

export default function Container() {
  // Init Theme
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Add-Todo"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#3e6bc1" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Done"
          component={Done}
          options={{
            title: "Done",
          }}
        />
        <Stack.Screen
          name="Add-Todo"
          component={AddToDo}
          options={{
            title: "Add To Do",
          }}
        />
        <Stack.Screen
          name="Edit-Todo"
          component={EditToDo}
          options={{
            title: "Edit To Do",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}