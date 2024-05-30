import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Task(): JSX.Element {
    return (
        <View style={styles.task}>
            <Text>1. Learn React Native</Text>
        </View>
    );
};

export default Task;

const styles = StyleSheet.create({
    task: {
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "white",
    },
});