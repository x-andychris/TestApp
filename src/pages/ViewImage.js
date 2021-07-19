import React from 'react';
import { ImageBackground, StyleSheet, Button, View, Image, Text } from "react-native";

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// importing the colors placed externally
import colors from '../config/colors';

function ViewImage(props) {
    return (
        <View style={styles.container}>

            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="white" />
            </View>

            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
            </View>


            <Image resizeMode={"contain"} style={styles.image} source={require("../assets/images/chairimage.jpg")} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%"
    },
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    }
})

export default ViewImage;