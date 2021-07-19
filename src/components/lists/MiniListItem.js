import React from 'react';

import { Image, StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../../config/colors';


function MiniListItem({ icon, iconcolor, text, onPress, }) {
    return (
        <TouchableOpacity underlayColor={colors.light} onPress={onPress}>
            <View style={styles.container}>
                <View style={[styles.icon, { backgroundColor: iconcolor }]}>
                    <MaterialCommunityIcons name={icon} size={25} color="white" />
                </View>
                <View style={styles.userdetails}>
                    <Text style={styles.textcontent}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 35,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    textcontent: {
        fontSize: 18,
        color: "black",
        fontWeight: "600"
    },
    userdetails: {
        justifyContent: "center"
    }
})

export default MiniListItem;