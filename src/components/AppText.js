import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function Apptext({ children, style }) {
    return (
        <Text style={[styles.fortext, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    fortext: {
        fontSize: 20, // cmon
        //fontStyle: "italic", // too easy
        //textTransform: "uppercase", // changing casing
        color: "tomato", // the font color
        //textAlign: "center", // the alignment of the text within
        fontWeight: "bold", // too easy
        //lineHeight: 40, // the size of the text area (better not use),

        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
})

export default Apptext;