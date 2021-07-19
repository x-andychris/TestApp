import React from 'react';
import { ImageBackground, StyleSheet, Button, View, Image, Text } from "react-native";

function DisplayImage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.viewcontainer}>
                <View style={styles.viewboxes}>

                </View>
                <View style={styles.middlebox} />

                <View style={styles.viewboxes}>

                </View>
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
    viewcontainer: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        top: 24,
    },
    viewboxes: {
        height: 60,
        width: 60,
        backgroundColor: "red",
        marginLeft: 10,
        marginRight: 10
    },
    middlebox: {
        height: 50,
        width: 50,
        backgroundColor: "#000",
        flexGrow: 1
    }
})

export default DisplayImage;