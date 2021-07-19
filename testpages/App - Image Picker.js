import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';

// import page from another
import TweakedSafeAreaView from './src/components/TweakedSafeAreaView';

// importing the image picker
import * as ImagePicker from "expo-image-picker";

// importing / using icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './src/config/colors';

import SinglePicker from './src/components/imagepicker/SinglePicker';
import MultiPicker from './src/components/imagepicker/MultiPicker';

export default function App() {
  // hook to hold image location
  const [imageUri, setImageUri] = useState();
  // for multi picker
  const [imageUris, setImageUris] = useState([]);
  return (
    // <MessagesScreen />

    // <TweakedSafeAreaView>
    //   <View>
    //     <SinglePicker imageUri={imageUri} onChangeImage={uri => setImageUri(uri)} />
    //   </View>
    // </TweakedSafeAreaView>

    <TweakedSafeAreaView>
      {/* <View> */}
      <MultiPicker data={imageUris} width={80} height={80} flexDirection="row" onImageChange={images => setImageUris(images)} />
      {/* </View> */}
    </TweakedSafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});