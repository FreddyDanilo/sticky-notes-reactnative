import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Sticky Notes</Text>
        </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    header: {
        padding: 16,
        width: "100%",
        backgroundColor: "rgba(50, 50, 50, 1)",
    },
    title: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 22,
        width: "100%",
        textAlign: "center",
    },
});