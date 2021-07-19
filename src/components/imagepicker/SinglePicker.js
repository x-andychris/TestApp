import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../../config/colors';

// importing the Image Picker
import * as ImagePicker from "expo-image-picker";

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

function SinglePicker({ imageUri, onChangeImage }) {
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

    // when the camera icon is pressed
    const handlePress = () => {
        if (!imageUri) {
            selectImage();
        } else {
            Alert.alert(
                "Delete Confirmation",
                "Are you sure you want to delete this image? ",
                [
                    // the two buttons and the actions attributed to each
                    { text: "Yes", onPress: () => onChangeImage(null) },
                    { text: "Cancel" },
                ],
                {
                    // set this option if you want to click outside to dismiss the popup
                    cancelable: true,
                }
            );
        }
    }

    // function to handle image selection
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                // specifying the type of media to be accepteds
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });

            if (!result.cancelled) {
                // passing back the image uri if upload wasn't cancelled
                onChangeImage(result.uri);
            }

        } catch (error) {

        }

    }
    return (
        <View style={styles.container}>
            {/* if there is no image */}
            {!imageUri && (
                <TouchableWithoutFeedback onPress={handlePress}>
                    <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />
                </TouchableWithoutFeedback>
            )}

            {/* when theres an image */}
            {imageUri &&
                <TouchableWithoutFeedback onPress={handlePress}>
                    <Image source={{ uri: imageUri }} style={styles.image} />
                </TouchableWithoutFeedback>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        width: 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default SinglePicker;