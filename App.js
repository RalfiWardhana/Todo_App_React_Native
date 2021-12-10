import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screen/home"
import Done from "./screen/done"
import AddToDo from "./screen/addTodo"
import EditToDo from "./screen/edit"
import Container  from "./Container";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <Container/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:18
  },
});
