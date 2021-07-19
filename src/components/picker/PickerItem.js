import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import customStyles from '../../config/customStyles';


function PickerItem({ label, onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.text, customStyles.pickerText, style]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        padding: 10
    }
})

export default PickerItem;