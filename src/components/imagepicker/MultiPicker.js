import React, { useEffect, useState } from 'react';

import { StyleSheet, TouchableOpacity, View, Image, ScrollView, FlatList, Alert, TouchableWithoutFeedback } from 'react-native';

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

// importing the image picker
import * as ImagePicker from "expo-image-picker";

// array holding the selected images
const imagesSelected = [];

function MultiPicker({ data, height, width, flexDirection, onImageChange }) {
    // getting a user's permision
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        // if the request isn't granted
        if (!granted) {
            alert("Enable Image Uploads for better app functionality");
        }
    }
    // getting a user's permision
    useEffect(() => {
        requestPermission();
    }, [])


    // hook to hold image location
    const [imageUris, setImageUris] = useState([]);

    // function to handle image selection
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();

            if (!result.cancelled) {
                // setting the image uri if upload wasn't cancelled
                // adding another image to the hook
                setImageUris(imageUris => [...imageUris, { id: imageUris.length, uri: result.uri }]);
                // passing back the values
                onImageChange(imageUris);
            }

        } catch (error) {

        }

    }

    // the function to handle delete
    const handleDelete = image => {
        // Delete the message from the messages array
        const updatedUris = imageUris.filter(m => m.id !== image.id);
        setImageUris(updatedUris);
        // passing back the values
        onImageChange(imageUris);
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
        <View style={[styles.uploadscontainer, { height: height ? height : 80, flexDirection: flexDirection ? flexDirection : "row-reverse" }]}>
            {/* The Image Picker */}
            {/* <View> */}
            <View style={[styles.imageupload, { width: width ? width : 80 }]}>
                <TouchableWithoutFeedback onPress={selectImage}>
                    <MaterialCommunityIcons name="camera" size={height / 1.5} color="grey" />
                </TouchableWithoutFeedback>
            </View>
            {/* </View> */}
            {/* For the images to be displayed */}
            <View style={styles.listStyle}>
                <FlatList data={imageUris}
                    horizontal
                    keyExtractor={imageUris => imageUris.id.toString()}
                    // hiding the scroll ber
                    showsHorizontalScrollIndicator={false}
                    // rendering the items (using the display template)
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => deleteConfirmation(item)}>
                            <Image
                                source={{ uri: item.uri }}
                                style={[styles.image, { width: width ? width : 80 }]} />
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
        flexDirection: "row-reverse",
    },
    listStyle: {
        height: "100%",
        flexDirection: "row-reverse",
    },
    imageupload: {
        backgroundColor: colors.light,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginRight: 5,
        height: "100%",
    },
    image: {
        borderRadius: 15,
        marginRight: 5,
        height: "100%"
    }

})

export default MultiPicker;