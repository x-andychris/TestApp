import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch, TouchableOpacity } from 'react-native';

// import page from another
import PostListing from './src/pages/account/PostListing';

// importing the image picker
import * as ImagePicker from "expo-image-picker";

export default function App() {
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

  return (
    <PostListing />
    // <TweakedSafeAreaView>

    // </TweakedSafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

});