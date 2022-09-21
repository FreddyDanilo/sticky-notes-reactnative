import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const ButtonAdd = ({ handleTab }) => {
    return (
        <View style={styles.buttonAdd}>
            <TouchableOpacity
                onPress={() => {
                    handleTab("create-note")
                }}
                style={styles.buttonAddContainer}>
                <Text style={styles.buttonAddText}>+</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ButtonAdd;

const styles = StyleSheet.create({
    buttonAdd: {
        position: "absolute",
        bottom: 100,
        right: 50,
        zIndex: 1
    },
    buttonAddContainer: {
        width: 45,
        height: 45,
        backgroundColor: "gold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 45
    },
    buttonAddText: {
        color: "rgba(60, 60, 60, 1)",
    }
});