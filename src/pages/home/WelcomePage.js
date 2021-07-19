import React from 'react';
import { ImageBackground, StyleSheet, Button, View, Image, Text } from "react-native";

// importing the designed app button
import AppButton from '../../components/AppButton';

// shortcut - rsf
function WelcomePage(props) {
    return (
        // for the background images
        <ImageBackground blurRadius={1} resizeMode={"cover"} style={styles.background} source={require('../../assets/images/tablelamp.jpg')}>

            {/* The part containing the logo and the text */}
            <View style={styles.logoContainer}>
                {/* The image logo at the top */}
                <Image style={styles.logo} source={require("../../assets/images/logo1.png")} />
                {/* The taxe below the logo */}
                <Text style={styles.logoText}>Welcome to the app</Text>
            </View>


            {/* The buttons to be at the bottom */}
            {/* <View style={styles.loginbutton}></View> */}
            <View style={styles.buttonContainer}>
                <AppButton title="Login" baColor="#fc5c65" />
                <AppButton title="Register" baColor="#4ecdc4" />
            </View>


        </ImageBackground>
    );
}

// shortcut - rnss
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    buttonContainer: {
        padding: 20,
        // width: "100%"
    },
    logoContainer: {
        position: "absolute",
        top: "17%",
        alignSelf: "center", // aligning itself center of the screen
        alignItems: "center", // aligning the items within to center also
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        paddingVertical: 5

    }
})

export default WelcomePage;