import React from 'react';

import { View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

// importing required items
import colors from '../../config/colors';

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';


function ListItemDeleteAction({ onPress }) {
    return (
        // using touchable without feedback to handle the on press event
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="delete" size={30} color="white" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ListItemDeleteAction;