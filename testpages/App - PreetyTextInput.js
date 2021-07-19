import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

// import page from another
import WelcomePage from './src/pages/WelcomePage';
import ViewImage from './src/pages/ViewImage';
import MessagesScreen from './src/pages/MessagesScreen';
import MiniListItem from './src/components/MiniListItem';
import AccountScreen from './src/pages/AccountScreen';
import ListingsScreen from './src/pages/ListingsScreen';
import ListingDetails from './src/pages/ListingDetails';
import TweakedSafeAreaView from './src/components/TweakedSafeAreaView';
import PreetyTextInput from './src/components/PreetyTextInput';

export default function App() {
  // a hook to hold the value in the firstName input box at each point
  const [firstName, setFirstName] = useState('');

  return (
    // <ListingsScreen />

    <TweakedSafeAreaView>
      <PreetyTextInput
        icon="user"
        iconsize={25}
        iconcolor="black"
        onChangeText={(text) => setFirstName(text)}
        // specifying the keyboard type
        keyboardType="default"
        // a number of characters the characters can't go above
        //dgfvmaxLength={15}
        // used in password cases
        secureTextEntry={false}
        placeholder="First Name" />
    </TweakedSafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    height: 40,
  }

});