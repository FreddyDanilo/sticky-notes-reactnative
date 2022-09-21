import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const ButtonSave = ({ handleEditNoteSave, noteEdited, editNote, handleTab }) => {
    return (
        <View style={styles.buttonSave}>
            <TouchableOpacity
                onPress={() => {
                    handleEditNoteSave(noteEdited, editNote)
                    handleTab("reading")
                }}
                style={styles.buttonSaveContainer}
            >
                <Text style={styles.buttonSaveText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
};

export default ButtonSave;

const styles = StyleSheet.create({
    buttonSave: {
        position: "absolute",
        bottom: 100,
        right: 40,
        zIndex: 1
    },
    buttonSaveContainer: {
        width: 75,
        height: 45,
        backgroundColor: "dodgerblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    buttonSaveText: {
        color: "rgba(255, 255, 255, 1)",
    }
});