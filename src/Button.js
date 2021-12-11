import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({text, cb}) {
    let bgColor = '#fa6e4b'
    if (typeof text === "string") {
        bgColor = "#ffb47b"
    }

    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: bgColor}]} activeOpacity={0.7} onPress={() => { cb(text) }}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        alignItems: "center",
        justifyContent: "center",
        width: "23%",
        height: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#faa564",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "800",
        fontSize: 23
    }
})