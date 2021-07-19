import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../config/colors';

// reusing styles
import customStyles from '../config/customStyles';

function PreetyTextInput({ icon, iconsize, iconcolor, style, width, ...otherProps }) {
    return (
        <View style={[styles.container, { width: width }]}>
            {/* Displaying an icon only when one is passed*/}
            <View style={styles.iconContainer}>
                {icon && <MaterialCommunityIcons name={icon} size={iconsize} color={iconcolor} />}
            </View>
            {/* The Text */}
            <TextInput style={[customStyles.text, styles.text, style]} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        marginRight: 3
    },
    text: {
        flex: 1
    }
})

export default PreetyTextInput;