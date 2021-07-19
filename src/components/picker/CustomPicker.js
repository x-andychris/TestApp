import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../config/colors';

// reusing styles
import customStyles from '../../config/customStyles'
import TweakedSafeAreaView from '../TweakedSafeAreaView';
import PickerItem from './PickerItem';
import AppButton from '../AppButton';
import CategoryPickerItem from './CategoryPickerItem';

// the PickerItemComponent is a variable to determine the type of picker to be used. 
// by default, it uses the PickerItem (picker)
function CustomPicker({ items, onSelectItem, selectedItem, icon, iconsize, iconcolor, placeholder, style, width, PickerItemComponent = PickerItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        // a fragment used since we have two views (Touchable and modal)
        <React.Fragment>
            {/* The drop down */}
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width: width }]}>
                    {/* Displaying an icon only when one is passed*/}
                    <View style={styles.iconContainer}>
                        {icon && <MaterialCommunityIcons name={icon} size={iconsize} color={iconcolor} />}
                    </View>
                    {/* The Text */}
                    {/* Checking if any item has already been selected to control the text styling */}
                    {selectedItem ?
                        <Text style={[customStyles.text, styles.text, style,]}>
                            {/* Displaying the passed text*/}
                            {selectedItem.label}
                        </Text>
                        :
                        <Text style={[customStyles.text, styles.text, style, styles.placeholder]}>
                            {/* Displaying the place holder if no text is passed in*/}
                            {placeholder}
                        </Text>
                    }
                    {/* Dropdown icon */}
                    <MaterialCommunityIcons name="chevron-down" size={iconsize} color={iconcolor} />
                </View>
            </TouchableWithoutFeedback>

            {/* a modal popup */}
            <Modal visible={modalVisible} animationType="slide">
                <TweakedSafeAreaView>
                    <AppButton style={styles.button} title="Close" onPress={() => setModalVisible(false)} />
                    {/* A flat list to display the list of items */}
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={PickerItemComponent == CategoryPickerItem ? 3 : 1}
                        style={{ width: "100%" }}
                        renderItem={({ item }) =>
                            // the format to be displayed in
                            <PickerItemComponent label={item.label} color={item.color} icon={item.icon}
                                onPress={() => {
                                    // closing the modal when an item is selected
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }} />
                        }
                    />
                </TweakedSafeAreaView>
            </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 5,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        marginRight: 3
    }, text: {
        flex: 1
    },
    button: {
        color: "orange"
    },
    placeholder: {
        color: colors.medium,
        flex: 1
    }
})

export default CustomPicker;