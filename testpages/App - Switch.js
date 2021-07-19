import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch, TouchableOpacity } from 'react-native';

// import page from another
import TweakedSafeAreaView from './src/components/TweakedSafeAreaView';

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    // <ListingsScreen />

    <TweakedSafeAreaView>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />

      <TouchableOpacity onPress={() => console.log(isNew)}>
        <Text>hi</Text>
      </TouchableOpacity>
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