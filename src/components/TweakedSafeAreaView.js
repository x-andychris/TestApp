import React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';

// importing Constants
import Constants from 'expo-constants';

function TweakedSafeAreaView({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        // another way to add the automatic space at the top to prevent overlap
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
})

export default TweakedSafeAreaView;