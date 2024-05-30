import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function input() {

    const [task, setTask] = useState("");

    return (
        <View>
          <TextInput
            placeholder="Add a task"
            style={styles.input}
            value={task}
            onChangeText={setTask}
          />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        padding: 6,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "white",
    }
});