import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput} from "react-native";

import Task from "./components/Task";
import Input from "./components/Input";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.bodyUiConfig}>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Here's your Todo list</Text>
        </View>
        <View style={styles.taskList}>
          <Task />
          <Task />
        </View>
        <Input />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bodyUiConfig: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskList: {
    marginTop: 15,
  }
});

export default App;
