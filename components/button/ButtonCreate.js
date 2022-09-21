import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const ButtonCreate = ({ handleTab, note, handleCreateNote, handleSetNote }) => {
    return (
        <View style={styles.buttonCreate}>
            <TouchableOpacity
                onPress={() => {
                    if (note != "vazio") {
                        handleCreateNote(note)
                        handleSetNote("vazio")
                        alert("Nota criada")
                        handleTab("reading")
                    } else {
                        alert("Escreva alguma nota")
                    }
                }}
                style={styles.buttonCreateContainer}
            >
                <Text style={styles.buttonCreateText}>Criar</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ButtonCreate;

const styles = StyleSheet.create({
    buttonCreate: {
        position: "absolute",
        bottom: 100,
        right: 40,
        zIndex: 1
    },
    buttonCreateContainer: {
        width: 75,
        height: 45,
        backgroundColor: "dodgerblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    buttonCreateText: {
        color: "rgba(255, 255, 255, 1)",
    }
});