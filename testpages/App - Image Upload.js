import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch, TouchableOpacity, Button, Image } from 'react-native';

// import page from another
import WelcomePage from './src/pages/home/WelcomePage';
import ViewImage from './src/pages/ViewImage';
import MessagesScreen from './src/pages/account/MessagesScreen';
import AccountScreen from './src/pages/account/AccountScreen';
import ListingsScreen from './src/pages/account/ListingsScreen';
import ListingDetails from './src/pages/account/ListingDetails';

import Login from './src/pages/home/Login';
import Register from './src/pages/home/Register';
import PostListing from './src/pages/account/PostListing';
import TweakedSafeAreaView from './src/components/TweakedSafeAreaView';

// importing the image picker
import * as ImagePicker from "expo-image-picker";
// importing the permissions api
import * as Permissions from "expo-permissions";

export default function App() {
  // hook to hold image location
  const [imageUri, setImageUri] = useState();
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

  // function to handle image selection
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        // setting the image uri if uploas wasn't cancelled
        setImageUri(result.uri);
      }

    } catch (error) {

    }

  }

  return (
    // <Login />

    <TweakedSafeAreaView>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </TweakedSafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  }

});