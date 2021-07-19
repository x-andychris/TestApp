import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import customStyles from '../../config/customStyles';

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

function CategoryPickerItem({ label, onPress, style, item, color, icon }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.innercontainer}>
                <MaterialCommunityIcons name={icon} size={40} color={color} />
                <Text style={[styles.text, customStyles.pickerText, style]}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "33%",
    },
    innercontainer: {
        alignItems: "center"
    },
    text: {
        padding: 10,
        alignItems: "center"
    }
})

export default CategoryPickerItem;