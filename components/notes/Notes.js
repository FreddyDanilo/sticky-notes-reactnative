import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Notes = ({ listNotes, handleEditNote, handleTab }) => {
    return (
        <ScrollView style={styles.notes}>
            {
                listNotes.map((value, index) => {
                    return (
                        <Text
                            style={styles.note}
                            key={index}
                            onPress={() => {
                                handleEditNote(index)
                                handleTab("edit-note")
                            }}
                        >
                            {value}
                        </Text>
                    )
                })
            }
        </ScrollView>
    )
};

export default Notes;

const styles = StyleSheet.create({
    notes: {
        padding: 16,
        width: "100%",
        height: "100%"
    },
    note: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: "rgba(50, 50, 50, 1)",
        borderRadius: 4,
        color: "rgba(200, 200, 200, 1)"
    }
});