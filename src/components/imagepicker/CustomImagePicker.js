import React, { useState } from 'react';

import { StyleSheet, TouchableOpacity, View, Image, ScrollView, FlatList, Alert } from 'react-native';

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

// importing the image picker
import * as ImagePicker from "expo-image-picker";

// array holding the selected images
const imagesSelected = [];

function CustomImagePicker({ height, width }) {
    // hook to hold image location
    const [imageUris, setImageUris] = useState(imagesSelected);

    // function to handle image selection
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();

            if (!result.cancelled) {
                // setting the image uri if upload wasn't cancelled
                // adding another image to the hook
                setImageUris(imageUris => [...imageUris, { id: imageUris.length, uri: result.uri }]);
            }

        } catch (error) {

        }

    }

    // the function to handle delete
    const handleDelete = image => {
        // Delete the message from the messages array
        const updatedUris = imageUris.filter(m => m.id !== image.id);
        setImageUris(updatedUris);
    }

    // a method to show the delete confirmation popup
    const deleteConfirmation = item => {
        Alert.alert(
            "Delete Confirmation",
            "You are about deleting an image",
            [
                // the two buttons and the actions attributed to each
                { text: "OK", onPress: () => handleDelete(item) },
                { text: "Cancel" },
            ],
            {
                // set this option if you want to click outside to dismiss the popup
                cancelable: true,
            }
        );
    }

    return (
        <View style={[styles.uploadscontainer, { height: height ? height : 80 }]}>
            {/* The Image Picker */}
            {/* <View> */}
            <TouchableOpacity onPress={selectImage}>
                <View style={[styles.imageupload, { height: height ? height : 80, width: width ? width : 80 }]}>
                    <MaterialCommunityIcons name="camera" size={height / 1.5} color="grey" />
                </View>
            </TouchableOpacity>
            {/* </View> */}
            {/* For the images to be displayed */}
            <View style={[styles.listStyle, { height: height ? height : 80 }]}>
                <FlatList data={imageUris}
                    horizontal
                    keyExtractor={imageUris => imageUris.id.toString()}
                    // rendering the items (using the display template)
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => deleteConfirmation(item)}>
                            <Image
                                source={{ uri: item.uri }}
                                style={[styles.imageupload, { width: width ? width : 80, height: height ? height : 80 }]} />
                        </TouchableOpacity>
                    }
                />


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    uploadscontainer: {
        height: 80,
        width: "100%",
        flex: 1,
        flexDirection: "row",
    },
    listStyle: {
        flex: 1,
        height: "100%"
    },
    imageupload: {
        backgroundColor: colors.light,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginRight: 5
    }
})

export default CustomImagePicker;