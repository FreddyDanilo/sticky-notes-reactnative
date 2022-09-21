import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

const CreateNote = ({ handleSetNote }) => {

    return (
        <ScrollView style={styles.createNote}>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={24}
                onChangeText={(text) => {
                    handleSetNote(text)
                }}
                autoFocus={true}
            >
            </TextInput>
        </ScrollView>
    )
};

export default CreateNote;

const styles = StyleSheet.create({
    createNote: {
        padding: 16,
        width: "100%",
        height: "100%"
    },
    input: {
        backgroundColor: "rgba(40, 40, 40, 1)",
        color: "rgba(200, 200, 200, 1)",
        textAlignVertical: "top",
        padding: 16,
        height: '100%',
        borderRadius: 4
    }
});