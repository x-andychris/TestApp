import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch, TouchableOpacity } from 'react-native';

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
import CustomPicker from './src/components/CustomPicker';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
  { label: "Wood", value: 4 },
]

export default function App() {

  const [category, setCatagory] = useState();

  return (
    // <MessagesScreen />

    <TweakedSafeAreaView>

      <CustomPicker items={categories} icon="apps" iconsize={25} placeholder="Category"
        selectedItem={category}
        onSelectItem={(category) => setCatagory(category)} />

      <PreetyTextInput icon="email" iconsize={25} placeholder="Email" />

    </TweakedSafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

});