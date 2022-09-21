import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

const EditNote = ({ editNote, listNotes, setEditNote, setNoteEdited }) => {
    useEffect(() => {
        setNoteEdited(editNote)
        setEditNote(listNotes[editNote])
    }, [])

    return (
        <ScrollView style={styles.editNote}>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={24}
                value={editNote}
                onChangeText={(text) => {
                    setEditNote(text)
                }}
                autoFocus={true}
            >
            </TextInput>
        </ScrollView>
    )
};

export default EditNote;

const styles = StyleSheet.create({
    editNote: {
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
})